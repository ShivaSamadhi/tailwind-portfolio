import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";


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
        setSelectedPage={setSelectedPage}/>

      {/*Desktop Dot Nav*/}
      <div className="w-5/6 mx-auto md:h-full">
      {isLgScreen && (
          <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
      )}
      </div>
      {/*Desktop Dot Nav*/}

    </div>
  );
}

export default App;
