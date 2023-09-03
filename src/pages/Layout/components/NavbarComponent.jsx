import styled, { keyframes } from 'styled-components'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { screen } from '../../../GlobalStyle.jsx'
import { useNavEffects } from '../../../hooks/useNavEffects.jsx'
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
	const { fixed, shrink } = useNavEffects()
	const location = useLocation()

	return (
		<ComponentWrapper
			$height={fixed || shrink ? '5rem' : '8rem'}
			$top={fixed ? '0' : '-0.0625rem'}>
			<Navbar>
				<MenuSection>
					<MenuComponent />
				</MenuSection>

				<NavBrandSection>
					<Icon
						type='navbar'
						$width={
							fixed || shrink
								? 'clamp(2.25rem, 1.748rem + 1.878vw, 3.25rem)'
								: 'clamp(3.25rem, 2.496rem + 2.817vw, 4.75rem)'
						}
						$transition={shrink && 'width 500ms ease-in-out'}
					/>
					<Title
						$fontsize={
							fixed || shrink
								? 'clamp(1rem, 0.749rem + 0.939vw, 1.5rem)'
								: 'clamp(1.25rem, 0.999rem + 0.939vw, 1.75rem)'
						}
						$transition={shrink && 'font-size 500ms ease-in-out'}>
						The Hawk's Nest
					</Title>
				</NavBrandSection>

				<NavLinkSection>
					{links.map((item, index) => {
						const active = item.url === location.pathname
						return (
							<PageLink
								key={index}
								to={item.url}
								$fontsize={
									fixed || shrink
										? 'clamp(0.875rem, 0.5rem + 0.781vw, 1.125rem)'
										: 'clamp(1rem, 0.625rem + 0.781vw, 1.25rem)'
								}>
								<CaretIcon
									icon={faIcon.CaretLeft}
									size={15}
									$active={active && 'block'}
								/>
								{item.title}
								<CaretIcon
									icon={faIcon.CaretRight}
									size={15}
									$active={active && 'block'}
								/>
							</PageLink>
						)
					})}
				</NavLinkSection>

				<NavSocialSection>
					{icons.map((item, index) => (
						<SocialLink
							key={index}
							to={item.link}
							target='_blank'
							rel='noreferrer'>
							<SocialIcon
								icon={item.icon}
								$width={fixed || shrink ? '1.5rem' : '1.75rem'}
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

const ComponentWrapper = styled.div`
	width: 100%;
	height: ${(props) => props.$height};
	position: sticky;
	top: ${(props) => props.$top};
	background: var(--color-secondary);
	border-bottom: solid hsla(360, 100%, 100%, 1);
	transition: height 250ms ease-in-out;
	z-index: 4;
`

const Navbar = styled.div`
	width: 100%;
	max-width: 84rem;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const MenuSection = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;
	@media ${screen.minSm} {
		display: none;
	}
`

const NavBrandSection = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	gap: 0.5rem;
	padding-right: 2.5%;
	@media ${screen.minSm} {
		flex-basis: 40%;
		flex-direction: row;
		padding-right: 0;
		padding-left: 2.5%;
	}
	@media ${screen.minMd} {
		flex-basis: 35%;
	}
`

const Icon = styled(LayoutIcon)`
	display: block;
	width: ${(props) => props.$width};
	fill: var(--color-primary);
	stroke: hsla(0, 100%, 100%, 1);
	transition: ${(props) => props.$transition || 'width 250ms ease-in-out'};
	&:hover {
		fill: hsla(0, 100%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: ${rotate} 1500ms linear infinite;
	}
`

const Title = styled.div`
	display: none;
	@media ${screen.minXs} {
		display: flex;
		font-size: ${(props) => props.$fontsize};
		font-weight: 500;
		text-transform: uppercase;
		transition: ${(props) =>
			props.$transition || 'font-size 250ms ease-in-out'};
	}
`

const NavLinkSection = styled.div`
	display: none;
	@media ${screen.minSm} {
		flex-basis: 60%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: var(--nav-divider);
		padding: 0 5%;
	}
	@media ${screen.minMd} {
		flex-basis: 42.5%;
		padding: 0 2.5%;
	}
`

const PageLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.125rem;
	text-transform: uppercase;
	font-size: ${(props) => props.$fontsize};
	transition-property: font-size, color, transform;
	transition-duration: 325ms, 250ms, 325ms;
	transition-timing-function: ease-in-out;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.1875);
	}
	&.active {
		font-weight: 700;
		cursor: default;
		&:hover {
			color: unset;
			transform: unset;
		}
	}
`

const NavSocialSection = styled.div`
	display: none;
	@media ${screen.minMd} {
		flex-basis: 22.5%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: var(--nav-divider);
		padding: 0 2.5%;
	}
`

const SocialLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
`

const SocialIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: ${(props) => props.$width || '1.75rem'};
	color: hsla(360, 100%, 100%, 1);
	transition-property: width, color, transform;
	transition-duration: 325ms, 250ms, 325ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.375);
	}
`

const CaretIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	display: ${(props) => props.$active || 'none'};
	color: var(--color-primary);
`
