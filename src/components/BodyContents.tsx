import React from "react";
import hero from "../assets/hero.png";
import services from "../assets/dummy-data/offered-services.json";
import skills from "../assets/dummy-data/skills.json";
import projects from "../assets/dummy-data/projects.json";

interface BodyContentsProps {
  refs: React.MutableRefObject<HTMLElement[]>;
  sections: string[];
}

const BodyContents: React.FC<BodyContentsProps> = ({ refs, sections }) => {
  const openLink = (github_link: string, actual_link: string) => {
    github_link && window.open(github_link, "_blank");
    actual_link && window.open(actual_link, "_blank");
  };

  const downloadCV = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/schoolgo-9e730.appspot.com/o/new-cv.pdf?alt=media&token=ccf7859f-c75f-48c8-84e6-df9faa3a1379",
      "_blank"
    );
  };

  return (
    <div className="h-screen col-span-4 overflow-y-scroll no-scrollbar">
      {sections.map((section, index) => (
        <div
          className={`${section != "home" && "p-[12px] sm:p-[32px] pt-[50px]"}`}
          id={section}
          key={section}
          ref={(el) => {
            if (el) {
              refs.current[index] = el;
            }
          }}
        >
          {section === "home" && (
            <div className="relative flex flex-col h-screen overflow-hidden">
              <div className="absolute z-10 flex p-[12px] sm:p-[32px] flex-col items-end w-full gap-2 ml-auto text-right">
                <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
                  my name is Arvin Malaluan, an aspiring web designer/web
                  developer from the Philippines.
                </span>
                <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
                  my goal is to design solutions that make a difference
                </span>
                <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
                  open for part-time, full-time, project-based contracts
                </span>
                <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8] mt-12">
                  btw, hello
                </span>
              </div>
              <img
                src={hero}
                className="object-cover w-100 md:w-[75%] h-full m-auto object-fit aspect-square"
                alt=""
              />
            </div>
          )}
          {section === "projects" && (
            <>
              <p className="text-[32px] text-[#792f22] font-semibold pl-[12px]">
                PROJECTS
              </p>
              {projects.map((item, index) => (
                <div
                  className="mt-2 p-[12px] border-b hover:bg-gray-100 hover:cursor-pointer"
                  key={index}
                  onClick={() => openLink(item.github, item.actual)}
                >
                  <p className="font-medium">{item.title}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                    <span className="font-medium">Tags:</span>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="py-1 px-2 bg-[#FFEBD8] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
          {section === "archives" && (
            <>
              <p className="text-[32px] text-[#792f22] font-semibold pl-[12px]">
                ARCHIVES
              </p>
              <p className="pl-[12px] italic text-gray-500">
                No archives found
              </p>
            </>
          )}
          {section === "skills" && (
            <>
              <p className="text-[32px] text-[#792f22] font-semibold pl-[12px]">
                SKILLS
              </p>
              {skills.map((item, index) => (
                <div key={index} className="p-[12px] border-b">
                  <p>{item.title}</p>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="py-1 px-2 bg-[#FFEBD8] rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
          {section === "services" && (
            <>
              <p className="text-[32px] text-[#792f22] font-semibold pl-[12px]">
                OFFERED SERVICES
              </p>
              <div className="pl-[12px] grid grid-cols-2 pt-2 text-center gap-2">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className={`col-span-2 p-12 border rounded md:col-span-1`}
                  >
                    <p className="text-2xl">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {section === "about" && (
            <>
              <p className="text-[32px] text-[#792f22] font-semibold pl-[12px]">
                ABOUT
              </p>
              <div className="pl-[12px]">
                <p className="text-3xl text-gray-500">
                  Hello! I'm Arvin Malaluan, a passionate web developer based in
                  Batangas City, Batangas. With a strong foundation in both
                  frontend and backend development, I am dedicated to creating
                  efficient and innovative solutions for various web
                  applications.
                </p>
                <p className="mt-4 mb-8 text-sm text-gray-600">
                  I am currently pursuing a Bachelor of Science in Information
                  Technology at Batangas State University, where I have
                  maintained a strong academic record with a GWA of 1.46 and am
                  a candidate for Latin Honors. My experience includes a recent
                  role as a Web Developer at the Center for Technopreneurship
                  and Innovation, where I planned and developed platforms to
                  facilitate interactions between startups and entrepreneurs.
                </p>
                <button
                  onClick={downloadCV}
                  className="px-4 py-2 mt-4 bg-[#792f22] text-white rounded"
                >
                  Download CV
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BodyContents;
