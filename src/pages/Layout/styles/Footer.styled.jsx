import { styled } from 'styled-components'
import { LayoutIcon } from '../components/Layout.icons.jsx'

export const Container = styled.div`
	width: 100%;
	height: 4rem;
	position: fixed;
	bottom: -0.0625rem;
	background: var(--color-secondary);
	border-top: solid hsla(360, 100%, 100%, 1);
	${({ $static }) =>
		$static &&
		`
		height: 3rem;
  `}
`

export const Footer = styled.div`
	width: 100%;
	max-width: 90rem;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.145rem + 6.024vw, 5rem);
	font-size: clamp(1.5rem, 0.7rem + 1.25vw, 2rem);
	font-weight: 300;
`

export const Copywrite = styled.div`
	font-size: clamp(1.5rem, 0.7rem + 1.25vw, 2rem);
	font-weight: 300;
`

export const LogoIcon = styled(LayoutIcon)`
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

export const SocialIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: 2rem;
	color: hsla(360, 100%, 100%, 1);
	transition-property: width, transform;
	transition-duration: 500ms, 250ms;
	transition-timing-function: ease-in-out, ease;
	cursor: pointer;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.25) translateY(-5%);
	}
	${({ $static }) =>
		$static &&
		`
		width: 1.75rem;
  `}
`
