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
	height: 6rem;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-secondary);
	border-bottom: solid hsla(0, 0%, 100%, 1);
`

const NavMenu = styled.div`
	height: 100%;
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

const Logo = styled(NavLogoIcon)`
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	width: clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem);
	display: flex;
	fill: var(--color-primary);
	stroke: hsla(0, 0%, 100%, 1);

	&:hover {
		fill: hsla(0, 0%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: rotate 1.5s linear infinite;
	}

	${responsive.tablet`
    width: clamp(2.75rem, 2.333rem + 1.042vw, 3rem);
  `}

	${responsive.laptop`
    width: clamp(3.25rem, 2.417rem + 1.042vw, 3.5rem);
  `}
`

const LogoTitle = styled.div`
	font-size: clamp(1rem, 0.679rem + 1.429vw, 1.25rem);
	font-weight: 500;
	text-transform: uppercase;

	@media (width < 22.5rem) {
		display: none;
	}

	${responsive.tablet`
    font-size: clamp(1.25rem, 0.833rem + 1.042vw, 1.5rem);
  `}

	${responsive.laptop`
    font-size: clamp(1.75rem, 0.917rem + 1.042vw, 2rem);
  `}
`

const NavLinks = styled.div`
	height: 100%;
	align-items: center;
	border-left: solid hsla(0, 0%, 100%, 1);
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
	transition: transform 0.25s ease;

	&:hover {
		color: var(--color-primary);
		transform: scale(1.25);
	}

	${responsive.tablet`
    font-size: clamp(0.85rem, 0.517rem + 0.833vw, 1.05rem);
  `}

	${responsive.laptop`
    font-size: clamp(1.25rem, 0.583rem + 0.833vw, 1.45rem);
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
    border-left: solid hsla(0, 0%, 100%, 1);
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
`

export {
	StyledNavbar,
	NavMenu,
	NavLogos,
	Logo,
	LogoTitle,
	NavLinks,
	Link,
	NavSocial,
	LinkedIn,
	GitHub,
	Codepen,
	StackOverflow,
}
