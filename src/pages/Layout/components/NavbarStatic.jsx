import React from 'react'

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
} from './styles/NavbarStatic.styled.js'

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

export const NavbarStatic = () => {
	return (
		<StyledNavbar>
			<NavMenu>
				<Menu />
			</NavMenu>
			<NavLogos>
				<Logo />
				<LogoTitle>The Hawk's Nest</LogoTitle>
			</NavLogos>
			<NavLinks>
				{links.map((link, index) => {
					return (
						<Link
							key={index}
							to={link.url}>
							{link.title}
						</Link>
					)
				})}
			</NavLinks>
			<NavSocial>
				<LinkedIn />
				<GitHub />
				<Codepen />
				<StackOverflow />
			</NavSocial>
		</StyledNavbar>
	)
}
