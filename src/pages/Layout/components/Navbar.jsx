import { useLocation } from 'react-router-dom'
import { useNavShrink } from '../../../hooks/useNavbarShrink.jsx'
import { Menu } from './Menu.jsx'
import * as Styled from '../styles/Navbar.styled.jsx'

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

	const socialIcons = [
		{
			icon: <Styled.LinkedIn $shrink={shrink ? 'shrink' : ''} />,
			link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
		},
		{
			icon: <Styled.GitHub $shrink={shrink ? 'shrink' : ''} />,
			link: 'https://github.com/hawkjosh',
		},
		{
			icon: <Styled.CodePen $shrink={shrink ? 'shrink' : ''} />,
			link: 'https://codepen.io/hawkjosh',
		},
		{
			icon: <Styled.StackOverflow $shrink={shrink ? 'shrink' : ''} />,
			link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
		},
	]

	return (
		<Styled.Navbar
			$height={staticNav ? '5rem' : '8rem'}
			$top={staticNav ? '0' : '-0.0625rem'}
			$shrink={shrink ? 'shrink' : ''}>
			<Styled.Menu>
				<Menu />
			</Styled.Menu>
			{staticNav ? (
				<>
					<Styled.NavBrand>
						<Styled.StaticIcon
							type='navbar'
							$shrink={shrink ? 'shrink' : ''}
						/>
						<Styled.StaticTitle $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</Styled.StaticTitle>
					</Styled.NavBrand>

					<Styled.NavLinks>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<Styled.StaticLink
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<Styled.LeftCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<Styled.RightCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
								</Styled.StaticLink>
							)
						})}
					</Styled.NavLinks>
				</>
			) : (
				<>
					<Styled.NavBrand>
						<Styled.Icon
							type='navbar'
							$shrink={shrink ? 'shrink' : ''}
						/>
						<Styled.Title $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</Styled.Title>
					</Styled.NavBrand>

					<Styled.NavLinks>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<Styled.Link
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<Styled.LeftCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<Styled.RightCaret
										size={15}
										$active={active ? 'active' : ''}
									/>
								</Styled.Link>
							)
						})}
					</Styled.NavLinks>
				</>
			)}

			<Styled.NavSocial>
				{socialIcons.map((icon, index) => (
					<Styled.SocialLink
						key={index}
						href={icon.link}
						target='_blank'
						rel='noreferrer'>
						{icon.icon}
					</Styled.SocialLink>
				))}
			</Styled.NavSocial>
		</Styled.Navbar>
	)
}
