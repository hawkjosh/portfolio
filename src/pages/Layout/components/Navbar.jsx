import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavShrink } from '../../../hooks/useNavbarShrink.js'
import { Menu } from './Menu.jsx'
import * as styled from '../styles/Navbar.styled.js'

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
		title: 'My Work',
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
	const staticNav = Boolean(location.pathname === '/work-samples')

	return (
		<styled.Navbar
			$height={staticNav ? '5rem' : '8rem'}
			$top={staticNav ? '0' : '-0.0625rem'}
			$shrink={shrink ? 'shrink' : ''}>
			<styled.Menu>
				<Menu />
			</styled.Menu>
			{staticNav ? (
				<>
					<styled.NavBrand>
						<styled.StaticLogo $shrink={shrink ? 'shrink' : ''} />
						<styled.StaticTitle $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</styled.StaticTitle>
					</styled.NavBrand>

					<styled.NavLinks>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<styled.StaticLink
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<styled.LeftCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<styled.RightCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
								</styled.StaticLink>
							)
						})}
					</styled.NavLinks>
				</>
			) : (
				<>
					<styled.NavBrand>
						<styled.Logo $shrink={shrink ? 'shrink' : ''} />
						<styled.Title $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</styled.Title>
					</styled.NavBrand>

					<styled.NavLinks>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<styled.Link
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<styled.LeftCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<styled.RightCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
								</styled.Link>
							)
						})}
					</styled.NavLinks>
				</>
			)}
			<styled.NavSocial>
				<styled.LinkedIn $shrink={shrink ? 'shrink' : ''} />
				<styled.GitHub $shrink={shrink ? 'shrink' : ''} />
				<styled.Codepen $shrink={shrink ? 'shrink' : ''} />
				<styled.StackOverflow $shrink={shrink ? 'shrink' : ''} />
			</styled.NavSocial>
		</styled.Navbar>
	)
}
