import { styled, keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as icon from '../components/Icons.jsx'
import { CaretLeft, CaretRight } from '@styled-icons/fa-solid'

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const Navbar = styled.nav`
	height: ${({ $height }) => $height};
	position: sticky;
	top: ${({ $top }) => $top};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-secondary);
	border-bottom: solid hsla(360, 100%, 100%, 1);
	transition: height 250ms ease-in-out;
	z-index: 4;

	${({ $shrink }) =>
		$shrink &&
		`
		height: 5rem;
  `}
`

export const Menu = styled.div`
	height: 100%;
	flex-basis: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;

	@media (width >= 640px) {
		display: none;
	}
`

export const NavBrand = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (width >= 1280px) {
		flex-basis: 31.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (1024px <= width < 1280px) {
		flex-basis: 32%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (640px <= width < 1024px) {
		flex-basis: 42.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (width < 640px) {
		flex-basis: 80%;
		flex-direction: row-reverse;
		justify-content: flex-start;
		padding-right: 1.5rem;
	}
`

const StyledLogo = styled(icon.NavLogo)`
	display: flex;
	fill: var(--color-primary);
	stroke: hsla(0, 100%, 100%, 1);

	&:hover {
		fill: hsla(0, 100%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: ${rotate} 1.5s linear infinite;
	}
`

export const Logo = styled(StyledLogo)`
	transition: width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(4.5rem, 2.833rem + 2.083vw, 5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(4rem, 1.992rem + 3.137vw, 4.5rem);
	}
	@media (640px <= width < 1024px) {
		width: clamp(3.5rem, 2.667rem + 2.083vw, 4rem);
	}
	@media (width < 640px) {
		width: clamp(3.5rem, 2.857rem + 2.857vw, 4rem);
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			width: clamp(3rem, 1.333rem + 2.083vw, 3.5rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(2.5rem, 0.5rem + 3.125vw, 3rem);
		}
		@media (640px <= width < 1024px) {
			width: clamp(2rem, 1.167rem + 2.083vw, 2.5rem);
		}
		@media (width < 640px) {
			width: clamp(2rem, 1.357rem + 2.857vw, 2.5rem);
		}
  `}
`

export const StaticLogo = styled(StyledLogo)`
	@media (width >= 1280px) {
		width: clamp(3.25rem, 2.417rem + 1.042vw, 3.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(3rem, 2rem + 1.563vw, 3.25rem);
	}
	@media (640px <= width < 1024px) {
		width: clamp(2.75rem, 2.333rem + 1.042vw, 3rem);
	}
	@media (width < 640px) {
		width: clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem);
	}
`

const StyledTitle = styled.div`
	font-weight: 500;
	text-transform: uppercase;

	@media (width < 360px) {
		display: none;
	}
`

export const Title = styled(StyledTitle)`
	transition: font-size 0.5s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.75rem, 0.083rem + 2.083vw, 2.25rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.35rem, -0.25rem + 2.5vw, 1.75rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.15rem, 0.317rem + 2.083vw, 1.65rem);
	}
	@media (width < 640px) {
		font-size: clamp(1.15rem, 0.507rem + 2.857vw, 1.65rem);
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			font-size: clamp(1.5rem, 0.667rem + 1.042vw, 1.75rem);
		}
		@media (1024px <= width < 1280px) {
			font-size: clamp(1.15rem, -0.05rem + 1.875vw, 1.45rem);
		}
		@media (640px <= width < 1024px) {
			font-size: clamp(0.95rem, 0.617rem + 0.833vw, 1.15rem);
		}
		@media (width < 640px) {
			font-size: clamp(0.95rem, 0.693rem + 1.143vw, 1.15rem);
		}
  `}
`

export const StaticTitle = styled(StyledTitle)`
	@media (width >= 1280px) {
		font-size: clamp(1.75rem, 0.917rem + 1.042vw, 2rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.5rem, 0.5rem + 1.563vw, 1.75rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.25rem, 0.833rem + 1.042vw, 1.5rem);
	}
	@media (width < 640px) {
		font-size: clamp(1rem, 0.679rem + 1.429vw, 1.25rem);
	}
`

export const NavLinks = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);

	@media (width >= 1280px) {
		flex-basis: 43.5%;
		padding: 0rem 2.5%;
	}
	@media (1024px <= width < 1280px) {
		flex-basis: 43%;
		padding: 0rem 2.5%;
	}
	@media (640px <= width < 1024px) {
		flex-basis: 57.5%;
		justify-content: space-evenly;
		padding: 0 2.5%;
		gap: 1.5rem;
	}
	@media (width < 640px) {
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
	transition: transform 0.25s ease-in-out, font-size 0.5s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.25rem, 0.417rem + 1.042vw, 1.5rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1rem, 0rem + 1.563vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(0.85rem, 0.183rem + 1.667vw, 1.25rem);
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			font-size: clamp(1rem, 0.167rem + 1.042vw, 1.25rem);
		}
		@media (1024px <= width < 1280px) {
			font-size: clamp(0.85rem, -0.15rem + 1.563vw, 1.1rem);
		}
		@media (640px <= width < 1024px) {
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
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.25rem, 0.583rem + 0.833vw, 1.45rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.05rem, 0.25rem + 1.25vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
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

export const LeftCaret = styled(CaretLeft)`
	color: var(--color-primary);
	display: none;

	${({ $active }) =>
		$active &&
		`display: block;
	`}
`

export const RightCaret = styled(CaretRight)`
	color: var(--color-primary);
	display: none;

	${({ $active }) =>
		$active &&
		`display: block;
	`}
`

export const NavSocial = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);
	padding: 0rem 2.5%;

	@media (width >= 1024px) {
		flex-basis: 25%;
	}
	@media (width < 1024px) {
		display: none;
	}
`

export const LinkedIn = styled(icon.Linkedin)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`

export const GitHub = styled(icon.Github)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`

export const Codepen = styled(icon.Codepen)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`

export const StackOverflow = styled(icon.StackOverflow)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({ $shrink }) =>
		$shrink &&
		`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`
