import { useNavShrink } from '../../../hooks/useNavbarShrink.jsx'
import { useStaticNav } from '../../../hooks/useStaticNav.jsx'
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
	const staticNav = useStaticNav()

	const icons = [
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
		<Styled.Container $shrink={shrink ? 'shrink' : ''}
		$static={staticNav ? 'static' : ''}>
			<Styled.Navbar>
				<Styled.MenuSection>
					<Menu />
				</Styled.MenuSection>

				<Styled.NavBrandSection>
					<Styled.Icon
						type='navbar'
						$shrink={shrink ? 'shrink' : ''}
						$static={staticNav ? 'static' : ''}
					/>
					<Styled.Title
						$shrink={shrink ? 'shrink' : ''}
						$static={staticNav ? 'static' : ''}>
						The Hawk's Nest
					</Styled.Title>
				</Styled.NavBrandSection>

				<Styled.NavLinkSection>
					{links.map((item, index) => {
						const active = item.url === location.pathname
						return (
							<Styled.Link
								key={index}
								to={item.url}
								$shrink={shrink ? 'shrink' : ''}
								$static={staticNav ? 'static' : ''}
								$active={active ? 'active' : ''}>
								<Styled.CaretIcon
									icon={faIcon.CaretLeft}
									size={15}
									$active={active ? 'active' : ''}
								/>
								{item.title}
								<Styled.CaretIcon
									icon={faIcon.CaretRight}
									size={15}
									$active={active ? 'active' : ''}
								/>
							</Styled.Link>
						)
					})}
				</Styled.NavLinkSection>

				<Styled.NavSocialSection>
					{icons.map((item, index) => (
						<Styled.SocialLink
							key={index}
							href={item.link}
							target='_blank'
							rel='noreferrer'>
							<Styled.SocialIcon
								icon={item.icon}
								$shrink={shrink ? 'shrink' : ''}
								$static={staticNav ? 'static' : ''}
							/>
						</Styled.SocialLink>
					))}
				</Styled.NavSocialSection>
			</Styled.Navbar>
		</Styled.Container>
	)
}
