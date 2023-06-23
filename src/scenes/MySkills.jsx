import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
	const isLgScreen = useMediaQuery(`(min-width: 1060px)`)

  return (
	  <section
		  id="skills"
		  className="pt-10 pb-24"
	  >
		  <div
			  className="md:flex md:justify-between md:hap-16 mt-32"
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