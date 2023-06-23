import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";

const MySkills = () => {
	const isLgScreen = useMediaQuery(`(min-width: 1060px)`)

  return (
	  <section
		  id="skills"
		  className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
	  >
		  <div
			  className="md:order-2 flex  justify-center basis-3/5 z-10 mt-16 md:mt-32"
		  >
			  {isLgScreen ? (
				  <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
					  <img
						  alt="profile"
						  className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
						  src="../assets/skills-image.png"
					  />
				  </div>
			  ) : (
				  <img
					  alt="profile"
					  className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
					  src="../assets/skills-image.png"
				  />
			  )}
		  </div>
	  </section>
  )
}

export default MySkills