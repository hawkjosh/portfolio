import styled, { keyframes } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { breakpoints, screen } from '../../../GlobalStyle.jsx'
import { useNavShrink } from '../../../hooks/useNavbarShrink.jsx'
import { useStaticNav } from '../../../hooks/useStaticNav.jsx'
import { MenuComponent } from './MenuComponent.jsx'
import { LayoutIcon } from '../components/Layout.icons.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as remixIcon from '@styled-icons/remix-line'

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

export const NavbarComponent = () => {
	const shrink = useNavShrink()
	const staticNav = useStaticNav()

	return (
		<ComponentWrapper
			$shrink={shrink ? 'shrink' : ''}
			$static={staticNav ? 'static' : ''}>
			<Navbar>
				<MenuSection>
					<MenuComponent />
				</MenuSection>

				<NavBrandSection $shrink={shrink ? 'shrink' : ''}>
					<Icon
						type='navbar'
						// $shrink={shrink ? 'shrink' : ''}
						$static={staticNav ? 'static' : ''}
					/>
					<Title
						// $shrink={shrink ? 'shrink' : ''}
						$static={staticNav ? 'static' : ''}>
						The Hawk's Nest
					</Title>
				</NavBrandSection>

				<NavLinkSection $shrink={shrink ? 'shrink' : ''}>
					{links.map((item, index) => {
						const active = item.url === location.pathname
						return (
							<PageLink
								key={index}
								to={item.url}
								// $shrink={shrink ? 'shrink' : ''}
								$active={active ? 'active' : ''}>
								<CaretIcon
									icon={faIcon.CaretLeft}
									size={15}
									$active={active ? 'active' : ''}
								/>
								{item.title}
								<CaretIcon
									icon={faIcon.CaretRight}
									size={15}
									$active={active ? 'active' : ''}
								/>
							</PageLink>
						)
					})}
				</NavLinkSection>

				<NavSocialSection $shrink={shrink ? 'shrink' : ''}>
					{icons.map((item, index) => (
						<SocialLink
							key={index}
							to={item.link}
							target='_blank'
							rel='noreferrer'>
							<SocialIcon
								icon={item.icon}
								// $shrink={shrink ? 'shrink' : ''}
								$static={staticNav ? 'static' : ''}
							/>
						</SocialLink>
					))}
				</NavSocialSection>
			</Navbar>
		</ComponentWrapper>
	)
}

// Styled-Components
const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const ComponentWrapper = styled.div`
	width: 100%;
	height: 8rem;
	position: sticky;
	top: -0.0625rem;
	background: var(--color-secondary);
	border-bottom: solid hsla(360, 100%, 100%, 1);
	transition: height 250ms ease-in-out;
	z-index: 4;
	${({ $shrink }) =>
		$shrink &&
		`
		height: 5rem;
  `}
	${({ $static }) =>
		$static &&
		`
		height: 5rem;
		top: 0;
  `}
`

export const Navbar = styled.div`
	width: 100%;
	max-width: 84rem;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const MenuSection = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;
	@media ${screen.minSm} {
		display: none;
	}
`

export const NavBrandSection = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	gap: 1rem;
	padding-right: 2.5%;
	transition: transform 250ms ease-in-out;
	@media ${screen.minSm} {
		flex-basis: 40%;
		flex-direction: row;
		padding-right: 0;
		padding-left: 2.5%;
		${({ $shrink }) =>
		$shrink &&
		`
		transform: scale(0.75);
		transition: transform 500ms ease-in-out;
  `}
	}
	@media ${screen.minMd} {
		flex-basis: 32.5%;
	}
`

export const Icon = styled(LayoutIcon)`
	display: flex;
	width: clamp(3.5rem, 2.746rem + 2.817vw, 5rem);
	fill: var(--color-primary);
	stroke: hsla(0, 100%, 100%, 1);
	transition: transform 500ms ease-in-out;
	&:hover {
		fill: hsla(0, 100%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: ${rotate} 1500ms linear infinite;
	}
	/* ${({ $shrink }) =>
		$shrink &&
		`
		transform: scale(0.65);
		transition: transform 500ms ease-in-out;
  `} */
	${({ $static }) =>
		$static &&
		`
		width: clamp(2.5rem, 1.998rem + 1.878vw, 3.5rem);
  `}
`

export const Title = styled.div`
	display: none;
	@media ${screen.minXs} {
		display: flex;
		font-size: clamp(1rem, 0.498rem + 1.878vw, 2rem);
		font-weight: 500;
		text-transform: uppercase;
		transition: transform 500ms ease-in-out;
		/* ${({ $shrink }) =>
			$shrink &&
			`
			transform: scale(0.75);
			transition: transform 500ms ease-in-out;
		`} */
		/* ${({ $static }) =>
			$static &&
			`
			font-size: clamp(1rem, 0.56rem + 1.643vw, 1.875rem);
		`} */
	}
`

export const NavLinkSection = styled.div`
	display: none;
	@media ${screen.minSm} {
		flex-basis: 60%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: solid hsla(360, 100%, 100%, 1);
		padding: 0 5%;
		transition: transform 250ms ease-in-out;
	}
	@media ${screen.minMd} {
		flex-basis: 45%;
		padding: 0 2.5%;
	}
	${({ $shrink }) =>
		$shrink &&
		`
		transform: scale(0.75);
		transition: transform 500ms ease-in-out;
  `}
`

export const PageLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.125rem;
	text-transform: uppercase;
	font-size: clamp(0.875rem, 0.2rem + 1.406vw, 1.325rem);
	transition-property: color, transform;
	transition-duration: 250ms, 325ms;
	transition-timing-function: ease, ease-in-out;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.25);
	}
	${({ $active }) =>
		$active &&
		`
		font-weight: 700;
		transform: scale(1.125);
		transition: transform 325ms ease-in-out;
		&:hover {
			color: unset;
			transform: scale(1.125);
			cursor: default;
		}
  `}
	/* ${({ $active, $shrink }) =>
		$active &&
		$shrink &&
		`
		font-weight: 700;
		transform: scale(0.9);
		transition: transform 325ms ease-in-out;
		&:hover {
			color: unset;
			transform: scale(0.9);
			cursor: default;
		}
  `}
	${({ $active, $shrink }) =>
		$active &&
		!$shrink &&
		`
		font-weight: 700;
		transform: scale(1.15);
		&:hover {
			color: unset;
			transform: scale(1.15);
			cursor: default;
		}
  `}
	${({ $active, $shrink }) =>
		!$active &&
		$shrink &&
		`
		transform: scale(0.75);
		transition-property: color, transform;
		transition-duration: 250ms, 325ms;
		transition-timing-function: ease, ease-in-out;
		&:hover {
			color: var(--color-primary);
			transform: scale(1);
		}
  `} */
`

export const CaretIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	display: none;
	color: var(--color-primary);
	${({ $active }) =>
		$active &&
		`display: block;
	`}
`

export const NavSocialSection = styled.div`
	display: none;
	@media ${screen.minMd} {
		flex-basis: 22.5%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: solid hsla(360, 100%, 100%, 1);
		padding: 0 2.5%;
		transition: transform 250ms ease-in-out;
	${({ $shrink }) =>
		$shrink &&
		`
		transform: scale(0.75);
		transition: transform 500ms ease-in-out;
  `}
	}
`

export const SocialLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SocialIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: 50%;
	color: hsla(360, 100%, 100%, 1);
	transition-property: color, transform;
	transition-duration: 250ms, 325ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.375);
	}
	/* ${({ $shrink }) =>
		$shrink &&
		`
		transform: scale(0.75);
		transition-property: color, transform;
		transition-duration: 250ms, 325ms;
		transition-timing-function: ease, ease-in-out;
		&:hover {
			color: var(--color-primary);
			transform: scale(1.125);
		}
  `} */
	${({ $static }) =>
		$static &&
		`
		width: 45%;
  `}
`
