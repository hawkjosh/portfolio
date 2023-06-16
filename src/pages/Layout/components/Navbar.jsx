import React from 'react'

import { useNavShrink } from './hooks/useNavbarShrink.js'

import { Menu } from './Menu.jsx'

import {
	StyledNavbar,
	NavMenu,
	NavLogos,
	Logo,
	LogoTitle,
	NavLinks,
	Link,
	NavSocial,
	LinkedIn,
	GitHub,
	Codepen,
	StackOverflow,
} from './styles/Navbar.styled.js'

const links = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Work Samples',
		url: '/work-samples',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
]

export const Navbar = () => {
	const [navRef, shrink] = useNavShrink()

	return (
		<StyledNavbar
			ref={navRef}
			shrink={shrink}>
			<NavMenu>
				<Menu />
			</NavMenu>
			<NavLogos>
				<Logo
					ref={navRef}
					shrink={shrink}
				/>
				<LogoTitle
					ref={navRef}
					shrink={shrink}>
					The Hawk's Nest
				</LogoTitle>
			</NavLogos>
			<NavLinks>
				{links.map((link, index) => {
					return (
						<Link
							key={index}
							to={link.url}
							ref={navRef}
							shrink={shrink}>
							{link.title}
						</Link>
					)
				})}
			</NavLinks>
			<NavSocial>
				<LinkedIn
					ref={navRef}
					shrink={shrink}
				/>
				<GitHub
					ref={navRef}
					shrink={shrink}
				/>
				<Codepen
					ref={navRef}
					shrink={shrink}
				/>
				<StackOverflow
					ref={navRef}
					shrink={shrink}
				/>
			</NavSocial>
		</StyledNavbar>
	)
}
