import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
	const isLgScreen = useMediaQuery(`(min-width: 1060px)`)

	return (
		<section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
			<div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
				{isLgScreen ? (
					<div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
						<img
							alt="profile"
							className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
							src="../assets/profile-image.png"
						/>
					</div>
				) : (
					<img
						alt="profile"
						className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
						src="../assets/profile-image.png"
					/>
				)}
			</div>

			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: .5 }}
					transition={{ duration: .5 }}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0},
					}}
				>
					<p className="text-6xl font-playfair z-10 text-center md:text-start">
						Ramaj {""}
						<span className="z-10 xs:relative xs:text-deep-blue xs:font-semibold xs:before:content-brush before:absolute before:z-5 before:-left-[40px] before:-top-[115px] before:z-[-1]">
						Johnson
						</span>
					</p>
					<p className="mt-10 mb-7 text-lg text-center xs:text-xl mx-auto max-w-[400px] md:text-start md:max-w-[600px]">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eos hic maxime necessitatibus ratione, repellendus?
					</p>
				</motion.div>

				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: .5 }}
					transition={{ delay: .2, duration: .5 }}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0},
					}}
				>
					<AnchorLink
						className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-deep-blue hover:text-white transition duration-500"
						onClick={()=> setSelectedPage("contact")}
						href="#contact"
					>
						Contact Me
					</AnchorLink>
				</motion.div>
			</div>
		</section>
	)
}

export default Landing