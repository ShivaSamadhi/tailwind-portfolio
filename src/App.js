import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";


const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isLgScreen = useMediaQuery("(min-width: 1060px)")

  useEffect(()=>{
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
      {/*Desktop Side Nav*/}
      {isLgScreen && (
          <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
      )}
      {/*Desktop Side Nav*/}
          <Landing
              setSelectedPage={setSelectedPage}
          />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>

    </div>
  );
}

export default App;
