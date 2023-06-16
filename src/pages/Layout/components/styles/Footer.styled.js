import styled from 'styled-components'
import { FooterLogoIcon } from '../FooterLogoIcon.jsx'
import { LinkedinIcon } from '../LinkedinIcon.jsx'
import { GithubIcon } from '../GithubIcon.jsx'
import { CodepenIcon } from '../CodepenIcon.jsx'
import { StackOverflowIcon } from '../StackOverflowIcon.jsx'

const StyledFooter = styled.footer`
	position: relative;
	bottom: 0;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.145rem + 6.024vw, 5rem);
	background-color: var(--color-secondary);
	border-top: solid hsla(0, 0%, 100%, 1);
`
const FooterCopywrite = styled.div`
	font-size: clamp(1.5rem, 0.7rem + 1.25vw, 2rem);
	font-weight: 300;
`
const FooterLogo = styled(FooterLogoIcon)`
	display: flex;
	width: clamp(3.25rem, 2.45rem + 1.25vw, 3.75rem);
	fill: hsla(0, 0%, 100%, 1);
	stroke: var(--color-primary);
	transition: transform 0.25s ease;

	&:hover {
		fill: var(--color-primary);
		stroke: hsla(0, 0%, 100%, 1);
		cursor: grab;
		transform: scale(1.0625);
	}
`

const LinkedIn = styled(LinkedinIcon)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}
`

const GitHub = styled(GithubIcon)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}
`

const Codepen = styled(CodepenIcon)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}
`

const StackOverflow = styled(StackOverflowIcon)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(0, 0%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		stroke: var(--color-primary);
		stroke-width: 8;
		transform: scale(1.25);
	}
`

export {
	StyledFooter,
	FooterCopywrite,
	FooterLogo,
	LinkedIn,
	GitHub,
	Codepen,
	StackOverflow,
}
