import { styled } from 'styled-components'
import * as icon from '../components/Icons.jsx'
import * as remixIcon from '@styled-icons/remix-line'

export const Footer = styled.footer`
	height: ${({ $height }) => $height};
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.145rem + 6.024vw, 5rem);
	background-color: var(--color-secondary);
	border-top: solid hsla(360, 100%, 100%, 1);
`

export const Copywrite = styled.div`
	font-size: clamp(1.5rem, 0.7rem + 1.25vw, 2rem);
	font-weight: 300;
`

export const Logo = styled(icon.FooterLogo)`
	display: flex;
	width: 2.5rem;
	fill: hsla(360, 100%, 100%, 1);
	stroke: var(--color-primary);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.0625);
		fill: var(--color-primary);
		stroke: hsla(360, 100%, 100%, 1);
		cursor: grab;
	}
`

export const SocialLink = styled.a`
	text-decoration: none;
`

export const LinkedIn = styled(remixIcon.Linkedin)`
	color: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;
	cursor: pointer;
	width: ${({ $width }) => $width};

	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const GitHub = styled(remixIcon.Github)`
	color: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;
	cursor: pointer;
	width: ${({ $width }) => $width};

	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const CodePen = styled(remixIcon.Codepen)`
	color: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;
	cursor: pointer;
	width: ${({ $width }) => $width};

	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const StackOverflow = styled(remixIcon.StackOverflow)`
	color: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;
	cursor: pointer;
	width: ${({ $width }) => $width};

	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`
