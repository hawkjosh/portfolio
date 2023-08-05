import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavShrink } from './hooks/useNavbarShrink.js'

import { Menu } from './Menu.jsx'

import {
	StyledNavbar,
	NavMenu,
	NavLogos,
	Logo,
	StaticLogo,
	Title,
	StaticTitle,
	NavLinks,
	Link,
	StaticLink,
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
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	return (
		<StyledNavbar
			height={staticNav ? '6rem' : '8rem'}
			top={staticNav ? '0' : '-0.0625rem'}
			shrink={shrink ? 'shrink' : ''}>
			<NavMenu>
				<Menu />
			</NavMenu>
			<NavLogos>
				{staticNav ? (
					<>
						<StaticLogo shrink={shrink ? 'shrink' : ''} />
						<StaticTitle shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</StaticTitle>
					</>
				) : (
					<>
						<Logo shrink={shrink ? 'shrink' : ''} />
						<Title shrink={shrink ? 'shrink' : ''}>The Hawk's Nest</Title>
					</>
				)}
			</NavLogos>
			{staticNav ? (
				<NavLinks>
					{links.map((link, index) => {
						return (
							<StaticLink
								key={index}
								to={link.url}
								shrink={shrink ? 'shrink' : ''}>
								{link.title}
							</StaticLink>
						)
					})}
				</NavLinks>
			) : (
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
			)}
			<NavSocial>
				<LinkedIn shrink={shrink ? 'shrink' : ''} />
				<GitHub shrink={shrink ? 'shrink' : ''} />
				<Codepen shrink={shrink ? 'shrink' : ''} />
				<StackOverflow shrink={shrink ? 'shrink' : ''} />
			</NavSocial>
		</StyledNavbar>
	)
}
