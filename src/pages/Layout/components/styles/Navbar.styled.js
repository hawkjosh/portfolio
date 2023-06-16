import styled from 'styled-components'
import { responsive } from '../../../../GlobalStyle.js'
import { NavLink } from 'react-router-dom'
import { NavLogoIcon } from '../NavLogoIcon.jsx'
import { LinkedinIcon } from '../LinkedinIcon.jsx'
import { GithubIcon } from '../GithubIcon.jsx'
import { CodepenIcon } from '../CodepenIcon.jsx'
import { StackOverflowIcon } from '../StackOverflowIcon.jsx'

const StyledNavbar = styled.nav`
	width: 100%;
	height: 8rem;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-secondary);
	border-bottom: solid hsla(0, 0%, 100%, 1);
	transition: height 0.5s ease-in-out;

	${({ shrink }) =>
		shrink &&
		`
		height: 5rem;
  `}
`

const NavMenu = styled.div`
	min-height: 5rem;
	flex-basis: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;

	${responsive.tablet`
    display: none;
  `}

	${responsive.laptop`
    display: none;
  `}
`

const NavLogos = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-basis: 80%;
	flex-direction: row-reverse;
	justify-content: flex-start;
	padding-right: 1.5rem;

	${responsive.tablet`
    flex-basis: 42.5%;
    flex-direction: row;
    padding-left: 2.5%;
    padding-right: 0;
  `}

	${responsive.laptop`
    flex-basis: 31.5%;
    flex-direction: row;
    padding-left: 2.5%;
    padding-right: 0;
  `}
`

const StyledLogo = styled(NavLogoIcon)`
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	width: clamp(3.5rem, 2.857rem + 2.857vw, 4rem);
	display: flex;
	fill: var(--color-primary);
	stroke: white;
	transition: width 0.5s ease-in-out;

	&:hover {
		fill: white;
		stroke: var(--color-primary);
		cursor: grab;
		animation: rotate 1.5s linear infinite;
	}

	${responsive.tablet`
    width: clamp(3.5rem, 2.667rem + 2.083vw, 4rem);
  `}

	${responsive.laptop`
    width: clamp(4.5rem, 2.833rem + 2.083vw, 5rem);
  `}

	${({ shrink }) =>
		shrink &&
		`
    width: clamp(2rem, 1.357rem + 2.857vw, 2.5rem);

    ${responsive.tablet`
      width: clamp(2rem, 1.167rem + 2.083vw, 2.5rem);
    `}

    ${responsive.laptop`
      width: clamp(3rem, 1.333rem + 2.083vw, 3.5rem);
    `}
  `}
`

const LogoTitle = styled.div`
	font-size: clamp(1.15rem, 0.507rem + 2.857vw, 1.65rem);
	font-weight: 500;
	text-transform: uppercase;
	transition: font-size 0.5s ease-in-out;

	@media (width < 22.5rem) {
		display: none;
	}

	${responsive.tablet`
    font-size: clamp(1.15rem, 0.317rem + 2.083vw, 1.65rem);
  `}

	${responsive.laptop`
    font-size: clamp(1.75rem, 0.083rem + 2.083vw, 2.25rem);
  `}

	${({ shrink }) =>
		shrink &&
		`
    font-size: clamp(0.95rem, 0.693rem + 1.143vw, 1.15rem);

    ${responsive.tablet`
      font-size: clamp(0.95rem, 0.617rem + 0.833vw, 1.15rem);
    `}

    ${responsive.laptop`
      font-size: clamp(1.5rem, 0.667rem + 1.042vw, 1.75rem);
    `}
  `}
`

const NavLinks = styled.div`
	height: 100%;
	align-items: center;
	border-left: solid white;
	gap: 1.5rem;
	display: none;

	${responsive.tablet`
    display: flex;
    flex-basis: 57.5%;
    justify-content: flex-end;
    padding-right: 2.5%;
  `}

	${responsive.laptop`
    display: flex;
    flex-basis: 43.5%;
    justify-content: space-between;
    padding: 0 2.5%;
  `}
`

const Link = styled(NavLink)`
	text-transform: uppercase;
	transition: transform 0.25s ease, font-size 0.5s ease-in-out;

	&:hover {
		color: var(--color-primary);
		transform: scale(1.25);
	}

	${responsive.tablet`
    font-size: clamp(0.85rem, 0.183rem + 1.667vw, 1.25rem);
  `}

	${responsive.laptop`
    font-size: clamp(1.25rem, 0.417rem + 1.042vw, 1.5rem);
  `}

	${({ shrink }) =>
		shrink &&
		`
    ${responsive.tablet`
      font-size: clamp(0.75rem, 0.333rem + 1.042vw, 1rem);
    `}

    ${responsive.laptop`
      font-size: clamp(1rem, 0.167rem + 1.042vw, 1.25rem);
    `}
  `}
`

const NavSocial = styled.div`
	display: none;

	${responsive.laptop`
    height: 100%;
    display: flex;
    flex-basis: 25%;
    justify-content: space-between;
    align-items: center;
    border-left: solid white;
    padding: 0rem 2.5%;
  `}
`

const LinkedIn = styled(LinkedinIcon)`
	width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}

	${({ shrink }) =>
		shrink &&
		`
    width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
  `}
`

const GitHub = styled(GithubIcon)`
	width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}

	${({ shrink }) =>
		shrink &&
		`
    width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
  `}
`

const Codepen = styled(CodepenIcon)`
	width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}

	${({ shrink }) =>
		shrink &&
		`
    width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
  `}
`

const StackOverflow = styled(StackOverflowIcon)`
	width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}

	${({ shrink }) =>
		shrink &&
		`
    width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
  `}
`

export {
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
}
