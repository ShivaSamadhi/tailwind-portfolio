import {useState} from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)

    const isMdScreen = useMediaQuery("(min-width: 769px)")

  return (
      <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
           <h4 className="font-playfair"></h4>
        </div>
      </nav>
  )
}

export default Navbar