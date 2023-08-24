import { styled } from 'styled-components'
import * as remixIcon from '@styled-icons/remix-line'
import * as icon from '../components/Icons.jsx'

export const Footer = styled.div`
	height: ${({ $height }) => $height};
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.145rem + 6.024vw, 5rem);
	background: var(--color-secondary);
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
	transition: transform 500ms ease-out;
	&:hover {
		transform: scale(1.0625);
		fill: var(--color-primary);
		stroke: hsla(360, 100%, 100%, 1);
		cursor: grab;
	}
`

export const SocialLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LinkedIn = styled(remixIcon.Linkedin)`
	width: ${({ $width }) => $width};
	color: hsla(360, 100%, 100%, 1);
	transition-property: transform, width;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const GitHub = styled(remixIcon.Github)`
	width: ${({ $width }) => $width};
	color: hsla(360, 100%, 100%, 1);
	transition-property: transform, width;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const CodePen = styled(remixIcon.Codepen)`
	width: ${({ $width }) => $width};
	color: hsla(360, 100%, 100%, 1);
	transition-property: transform, width;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`

export const StackOverflow = styled(remixIcon.StackOverflow)`
	width: ${({ $width }) => $width};
	color: hsla(360, 100%, 100%, 1);
	transition-property: transform, width;
	transition-duration: 250ms, 500ms;
	transition-timing-function: ease, ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.25) translateY(-5%);
		color: var(--color-primary);
	}
`
