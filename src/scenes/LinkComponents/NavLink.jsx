import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLink = ({page, selectedPage, setSelectedPage}) => {
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

export default NavLink