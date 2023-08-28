import { useLocation } from 'react-router-dom'
import { useNavShrink } from '../../../hooks/useNavbarShrink.jsx'
import { Menu } from './Menu.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as remixIcon from '@styled-icons/remix-line'
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
			icon: remixIcon.Linkedin,
			link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
		},
		{
			icon: remixIcon.Github,
			link: 'https://github.com/hawkjosh',
		},
		{
			icon: remixIcon.Codepen,
			link: 'https://codepen.io/hawkjosh',
		},
		{
			icon: remixIcon.StackOverflow,
			link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
		},
	]

	return (
		<Styled.Navbar
			$height={staticNav ? '5rem' : '8rem'}
			$top={staticNav ? '0' : '-0.0625rem'}
			$shrink={shrink ? 'shrink' : ''}>
			<Styled.MenuSection>
				<Menu />
			</Styled.MenuSection>
			{staticNav ? (
				<>
					<Styled.NavBrandSection>
						<Styled.StaticIcon
							type='navbar'
							$shrink={shrink ? 'shrink' : ''}
						/>
						<Styled.StaticTitle $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</Styled.StaticTitle>
					</Styled.NavBrandSection>

					<Styled.NavLinkSection>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<Styled.StaticLink
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<Styled.CaretIcon
										icon={faIcon.CaretLeft}
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<Styled.CaretIcon
										icon={faIcon.CaretRight}
										size={15}
										$active={active ? 'active' : ''}
									/>
								</Styled.StaticLink>
							)
						})}
					</Styled.NavLinkSection>
				</>
			) : (
				<>
					<Styled.NavBrandSection>
						<Styled.Icon
							type='navbar'
							$shrink={shrink ? 'shrink' : ''}
						/>
						<Styled.Title $shrink={shrink ? 'shrink' : ''}>
							The Hawk's Nest
						</Styled.Title>
					</Styled.NavBrandSection>

					<Styled.NavLinkSection>
						{links.map((link, index) => {
							const active = link.url === location.pathname
							return (
								<Styled.Link
									key={index}
									to={link.url}
									$shrink={shrink ? 'shrink' : ''}
									$active={active ? 'active' : ''}>
									<Styled.CaretIcon
										icon={faIcon.CaretLeft}
										size={15}
										$active={active ? 'active' : ''}
									/>
									{link.title}
									<Styled.CaretIcon
										icon={faIcon.CaretRight}
										size={15}
										$active={active ? 'active' : ''}
									/>
								</Styled.Link>
							)
						})}
					</Styled.NavLinkSection>
				</>
			)}

			<Styled.NavSocialSection>
				{socialIcons.map((icon, index) => (
					<Styled.SocialLink
						key={index}
						href={icon.link}
						target='_blank'
						rel='noreferrer'>
						<Styled.SocialIcon
							icon={icon.icon}
							$shrink={shrink ? 'shrink' : ''}
						/>
					</Styled.SocialLink>
				))}
			</Styled.NavSocialSection>
		</Styled.Navbar>
	)
}
