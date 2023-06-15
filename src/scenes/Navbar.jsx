import {useState} from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const Link = ({page, selectedPage, setSelectedPage}) => {
    const pageLowerCase = page.toLowerCase()

    return (
        <AnchorLink
            className={`${selectedPage === pageLowerCase ? "text-yellow": ""} hover:text-yellow transition duration-500`}
            href={`#${pageLowerCase}`}
            onClick={()=> setSelectedPage(pageLowerCase)}
        >
            {page}
        </AnchorLink>
    )
}
const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)

    const aboveSmScreen = useMediaQuery("(min-width: 769px)")

  return (
      <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
           <h4 className="font-playfair text-3xl font-bold">
               RJ
           </h4>

{/*Desktop Nav*/}
           {aboveSmScreen ?
               (
                   <div className="flex justify-between gap-16 text-sm font-semibold">
                       <Link
                           page="Home"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Skills"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Projects"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Testimonials"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Contact"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                   </div>
               ) :
               (
                   <button
                       className="rounded-full bg-red p-2"
                       onClick={()=> setIsMenuToggled(!isMenuToggled)}
                   >
                       <img alt='menu' src="../assets/menu-icon.svg"/>
                   </button>
               )
           }

{/*Mobile Navbar*/}
           {!aboveSmScreen && isMenuToggled && (
               <div className="fixed right-0 bottom-0 h-full bg-blue w-[75%]">

               {/*Close Icon*/}
                   <div className="flex justify-end p-12">
                       <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                           <img alt="close-icon" src="../assets/close-icon.svg"/>
                       </button>
                   </div>
               {/*Close Icon*/}

               {/*Menu Items*/}
                   <div className="flex flex-col gap-10 mx-[33%] text-2xl text-deep-blue">
                       <Link
                           page="Home"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Skills"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Projects"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Testimonials"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                       <Link
                           page="Contact"
                           selectedPage={selectedPage}
                           setSelectedPage={setSelectedPage}/>
                   </div>
               {/*Menu Links*/}

               </div>
            )
           }

        </div>
      </nav>
  )
}

export default Navbar