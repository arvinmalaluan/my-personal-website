const SideBarContents = () => {
  return (
    <div className="hidden h-full border-r lg:w-[292px] flex-shrink-0 lg:block ">
      <div className=" p-[32px] text-sm border-b">
        <p className="mb-1 font-semibold text-[#792f22]">RECENT PROJECTS</p>
        <p className="">ICONS South Luzon</p>
        <p className="">PESO-Lipa.Online</p>
        <p className="">Estetik Salon</p>
        <p className="">REAP</p>
        <p className="">Ordering System</p>
        <p className="">Karenderya Ordering System</p>
      </div>

      <div className=" p-[32px] text-sm border-b">
        <p className="mb-1 font-semibold text-[#792f22]">EXPERIENCE</p>
        <p>
          Full-stack Web Developer at Center for Technopreneurship and
          Innovation
        </p>
      </div>

      <div className=" p-[32px] text-sm border-b">
        <p className="mb-1 font-semibold text-[#792f22]">CERTIFICATIONS</p>
        <p>AWS Academy Graduate - AWS Academy Cloud Foundations.</p>
        <p>AWS Academy Graduate - AWS Academy Cloud Architecturing.</p>
      </div>

      <div className=" p-[32px] text-sm">
        <p className="mb-1 font-semibold text-[#792f22]">CONTACTS</p>
        <p>Github</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>E-Mail</p>
      </div>
    </div>
  );
};

export default SideBarContents;
