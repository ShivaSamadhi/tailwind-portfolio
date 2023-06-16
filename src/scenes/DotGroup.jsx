import SideLink from "./LinkComponents/SideLink";

const DotGroup = ({selectedPage, setSelectedPage}) => {

  return (
      <div className="flex flex-col gap-10 fixed top-[50%] right-7">
          <SideLink
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
          <SideLink
              page="skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
          <SideLink
              page="projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
          <SideLink
              page="testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
          <SideLink
              page="contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
      </div>
  )
}

export default DotGroup