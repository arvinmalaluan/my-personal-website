import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BodyContents from "./components/BodyContents";
import Navigation from "./components/Navigation";
import SideBarContents from "./components/SideBarContents";

const sections = [
  "home",
  "projects",
  "archives",
  "skills",
  "services",
  "about",
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="">
      <div className="relative flex h-full">
        <SideBarContents />
        <div className="relative flex h-full">
          <BodyContents refs={sectionRefs} sections={sections} />
          <Navigation active={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default App;
