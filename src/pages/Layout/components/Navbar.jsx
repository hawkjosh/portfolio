import React from 'react'

import { useNavShrink } from './hooks/useNavbarShrink.js'

import { Menu } from './Menu.jsx'

import {
	StyledNavbar,
	NavMenu,
	NavLogos,
	StyledLogo,
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
	const shrink = useNavShrink()

	return (
		<StyledNavbar shrink={shrink ? 'shrink' : ''}>
			<NavMenu>
				<Menu />
			</NavMenu>
			<NavLogos>
				<StyledLogo shrink={shrink ? 'shrink' : ''} />
				<LogoTitle shrink={shrink ? 'shrink' : ''}>The Hawk's Nest</LogoTitle>
			</NavLogos>
			<NavLinks>
				{links.map((link, index) => {
					return (
						<Link
							key={index}
							to={link.url}
							shrink={shrink ? 'shrink' : ''}>
							{link.title}
						</Link>
					)
				})}
			</NavLinks>
			<NavSocial>
				<LinkedIn shrink={shrink ? 'shrink' : ''} />
				<GitHub shrink={shrink ? 'shrink' : ''} />
				<Codepen shrink={shrink ? 'shrink' : ''} />
				<StackOverflow shrink={shrink ? 'shrink' : ''} />
			</NavSocial>
		</StyledNavbar>
	)
}
