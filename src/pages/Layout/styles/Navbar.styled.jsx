import { styled, keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { breakpoints, media } from '../../../GlobalStyle.jsx'
import { LayoutIcon } from '../components/Layout.icons.jsx'

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const Navbar = styled.div`
	height: ${({ $height }) => $height};
	position: sticky;
	top: ${({ $top }) => $top};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--color-secondary);
	border-bottom: solid hsla(360, 100%, 100%, 1);
	transition: height 250ms ease-in-out;
	z-index: 4;
	${({ $shrink }) =>
		$shrink &&
		`
		height: 5rem;
  `}
`

export const MenuSection = styled.div`
	height: 100%;
	flex-basis: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;
	@media (width >= ${breakpoints.md}) {
		display: none;
	}
`

export const NavBrandSection = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		flex-basis: 31.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		flex-basis: 32%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		flex-basis: 42.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		flex-basis: 80%;
		flex-direction: row-reverse;
		justify-content: flex-start;
		padding-right: 1.5rem;
	}
	@media ${media.xs} {
		flex-basis: 80%;
		flex-direction: row-reverse;
		justify-content: flex-start;
		padding-right: 1.5rem;
	}
`

const StyledIcon = styled(LayoutIcon)`
	display: flex;
	fill: var(--color-primary);
	stroke: hsla(0, 100%, 100%, 1);
	&:hover {
		fill: hsla(0, 100%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: ${rotate} 1500ms linear infinite;
	}
`

export const Icon = styled(StyledIcon)`
	transition: width 500ms ease-in-out;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		width: clamp(4.5rem, 2.833rem + 2.083vw, 5rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		width: clamp(4rem, 1.992rem + 3.137vw, 4.5rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		width: clamp(3.5rem, 2.667rem + 2.083vw, 4rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		width: clamp(3.5rem, 2.857rem + 2.857vw, 4rem);
	}
	@media ${media.xs} {
		width: clamp(3.5rem, 2.857rem + 2.857vw, 4rem);
	}
	${({ $shrink }) =>
		$shrink &&
		`
		// @media (width >= ${breakpoints.xl}) {
		@media ${media.xl} {
			width: clamp(3rem, 1.333rem + 2.083vw, 3.5rem);
		}
		// @media (width < ${breakpoints.xl}) {
		// @media ${media.maxLg} {
			@media ${media.lg} {
			width: clamp(2.5rem, 0.5rem + 3.125vw, 3rem);
		}
		// @media (width < ${breakpoints.lg}) {
		// @media ${media.maxMd} {
			@media ${media.md} {
			width: clamp(2rem, 1.167rem + 2.083vw, 2.5rem);
		}
		// @media (width < ${breakpoints.md}) {
		// @media ${media.maxSm} {
			@media ${media.sm} {
			width: clamp(2rem, 1.357rem + 2.857vw, 2.5rem);
		}
			@media ${media.xs} {
			width: clamp(2rem, 1.357rem + 2.857vw, 2.5rem);
		}
  `}
`

export const StaticIcon = styled(StyledIcon)`
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		width: clamp(3.25rem, 2.417rem + 1.042vw, 3.5rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		width: clamp(3rem, 2rem + 1.563vw, 3.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		width: clamp(2.75rem, 2.333rem + 1.042vw, 3rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		width: clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem);
	}
	@media ${media.xs} {
		width: clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem);
	}
`

const StyledTitle = styled.div`
	font-weight: 500;
	text-transform: uppercase;
	@media (width < ${breakpoints.sm}) {
		display: none;
	}
`

export const Title = styled(StyledTitle)`
	transition: font-size 500ms ease-in-out;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: clamp(1.75rem, 0.083rem + 2.083vw, 2.25rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.35rem, -0.25rem + 2.5vw, 1.75rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1.15rem, 0.317rem + 2.083vw, 1.65rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: clamp(1.15rem, 0.507rem + 2.857vw, 1.65rem);
	}
	@media ${media.xs} {
		font-size: clamp(1.15rem, 0.507rem + 2.857vw, 1.65rem);
	}
	${({ $shrink }) =>
		$shrink &&
		`
		// @media (width >= ${breakpoints.xl}) {
		@media ${media.xl} {
			font-size: clamp(1.5rem, 0.667rem + 1.042vw, 1.75rem);
		}
		// @media (width < ${breakpoints.xl}) {
		// @media ${media.maxLg} {
			@media ${media.lg} {
			font-size: clamp(1.15rem, -0.05rem + 1.875vw, 1.45rem);
		}
		// @media (width < ${breakpoints.lg}) {
		// @media ${media.maxMd} {
			@media ${media.md} {
			font-size: clamp(0.95rem, 0.617rem + 0.833vw, 1.15rem);
		}
		// @media (width < ${breakpoints.md}) {
		// @media ${media.maxSm} {
			@media ${media.sm} {
			font-size: clamp(0.95rem, 0.693rem + 1.143vw, 1.15rem);
		}
			@media ${media.xs} {
			font-size: clamp(0.95rem, 0.693rem + 1.143vw, 1.15rem);
		}
  `}
`

export const StaticTitle = styled(StyledTitle)`
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: clamp(1.75rem, 0.917rem + 1.042vw, 2rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.5rem, 0.5rem + 1.563vw, 1.75rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1.25rem, 0.833rem + 1.042vw, 1.5rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: clamp(1rem, 0.679rem + 1.429vw, 1.25rem);
	}
	@media ${media.xs} {
		font-size: clamp(1rem, 0.679rem + 1.429vw, 1.25rem);
	}
`

export const NavLinkSection = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		flex-basis: 43.5%;
		padding: 0rem 2.5%;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		flex-basis: 43%;
		padding: 0rem 2.5%;
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		flex-basis: 57.5%;
		justify-content: space-evenly;
		padding: 0 2.5%;
		gap: 1.5rem;
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		display: none;
	}
	@media ${media.xs} {
		display: none;
	}
`

const StyledLink = styled(NavLink)`
	text-transform: uppercase;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.1875);
	}
`

export const Link = styled(StyledLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.125rem;
	transition-property: transform, font-size;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease-in-out;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: clamp(1.25rem, 0.417rem + 1.042vw, 1.5rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1rem, 0rem + 1.563vw, 1.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(0.85rem, 0.183rem + 1.667vw, 1.25rem);
	}
	${({ $shrink }) =>
		$shrink &&
		`
		// @media (width >= ${breakpoints.xl}) {
		@media ${media.xl} {
			font-size: clamp(1rem, 0.167rem + 1.042vw, 1.25rem);
		}
		// @media (width < ${breakpoints.xl}) {
		// @media ${media.maxLg} {
			@media ${media.lg} {
			font-size: clamp(0.85rem, -0.15rem + 1.563vw, 1.1rem);
		}
		// @media (width < ${breakpoints.lg}) {
		// @media ${media.maxMd} {
			@media ${media.md} {
			font-size: clamp(0.75rem, 0.333rem + 1.042vw, 1rem);
		}
  `}
	${({ $active }) =>
		$active &&
		`
		font-weight: 700;
		scale: 1.15;
		&:hover {
			color: unset;
			transform: unset;
			cursor: default;
		}
  `}
`

export const StaticLink = styled(StyledLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.125rem;
	transition: transform 250ms ease-in-out;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: clamp(1.25rem, 0.583rem + 0.833vw, 1.45rem);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.05rem, 0.25rem + 1.25vw, 1.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(0.85rem, 0.517rem + 0.833vw, 1.05rem);
	}
	${({ $active }) =>
		$active &&
		`
		font-weight: 700;
		scale: 1.15;
		&:hover {
			color: unset;
			transform: unset;
			cursor: default;
		}
  `}
`

export const CaretIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	color: var(--color-primary);
	display: none;
	${({ $active }) =>
		$active &&
		`display: block;
	`}
`

export const NavSocialSection = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);
	padding: 0rem 2.5%;
	@media (width >= ${breakpoints.lg}) {
		flex-basis: 25%;
	}
	@media (width < ${breakpoints.lg}) {
		display: none;
	}
`

export const SocialLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SocialIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: 50%;
	color: hsla(360, 100%, 100%, 1);
	transition-property: transform, width;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
	${({ $shrink }) =>
		$shrink &&
		`
		width: 40%;
  `}
`
