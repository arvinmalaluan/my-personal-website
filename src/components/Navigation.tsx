import React from "react";

interface NavigationProps {
  active: string;
}

const Navigation: React.FC<NavigationProps> = ({ active }) => {
  return (
    <div className="md:flex flex-col gap-1 p-[32px] hidden">
      <a
        href="#"
        className={`text-sm ${
          active === "home" ? "text-[#792f22] font-semibold" : "text-gray-400"
        }`}
      >
        home
      </a>
      <a
        href="#"
        className={`text-sm ${
          active === "projects"
            ? "text-[#792f22] font-semibold"
            : "text-gray-400"
        }`}
      >
        projects
      </a>
      <a
        href="#"
        className={`text-sm ${
          active === "archives"
            ? "text-[#792f22] font-semibold"
            : "text-gray-400"
        }`}
      >
        archives
      </a>
      <a
        href="#"
        className={`text-sm ${
          active === "skills" ? "text-[#792f22] font-semibold" : "text-gray-400"
        }`}
      >
        skills
      </a>
      <a
        href="#"
        className={`text-sm ${
          active === "services"
            ? "text-[#792f22] font-semibold"
            : "text-gray-400"
        }`}
      >
        services
      </a>
      <a
        href="#"
        className={`text-sm ${
          active === "about" ? "text-[#792f22] font-semibold" : "text-gray-400"
        }`}
      >
        about
      </a>
    </div>
  );
};

export default Navigation;
