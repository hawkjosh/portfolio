import { styled } from 'styled-components'
import { breakpoints, media } from '../../../GlobalStyle.jsx'
import { HomeIcon } from '../components/Home.icons.jsx'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1.5rem;
`

export const Image = styled.img`
	width: clamp(18.75rem, 12.711rem + 26.84vw, 40.625rem);
`

export const Wrapper = styled.div`
	width: 100%;
`

export const Divider = styled.hr`
	height: 0.15rem;
	background: hsla(360, 100%, 100%, 1);
	border-style: none;
	margin: 4rem 10%;
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		margin: 4rem 17.5%;
	}
	@media ${media.xs} {
		margin: 4rem 17.5%;
	}
`

export const IconsContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		width: 100%;
		flex-direction: column;
		gap: 5rem;
	}
	@media ${media.xs} {
		width: 100%;
		flex-direction: column;
		gap: 5rem;
	}
`

export const Icon = styled(HomeIcon)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: ${(props) =>
			props.type === 'laptop'
				? 'hsla(360, 100%, 100%, 1)'
				: props.type === 'superhero'
				? 'hsla(240, 100%, 50%, 1)'
				: props.type === 'tennessee'
				? 'hsla(31, 100%, 48%, 1)'
				: 'var(--color-secondary)'};
		stroke: ${(props) =>
			props.type === 'laptop'
				? 'var(--color-secondary)'
				: props.type === 'superhero'
				? 'hsla(0, 100%, 50%, 1)'
				: props.type === 'tennessee'
				? 'hsla(360, 100%, 100%, 1)'
				: 'none'};
		stroke-width: ${(props) => (props.type === 'laptop' ? 15 : 8)};
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
	@media ${media.xs} {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
`
