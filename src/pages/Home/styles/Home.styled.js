import { styled } from 'styled-components'
import * as icon from '../components/Icons.jsx'

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
	background-color: hsla(360, 100%, 100%, 1);
	border-style: none;
	margin: 4rem 10%;

	@media (width < 640px) {
		margin: 4rem 17.5%;
	}
`

export const Icons = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (width < 640px) {
		width: 100%;
		flex-direction: column;
		gap: 5rem;
	}
`

export const Laptop = styled(icon.Laptop)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 15;
		cursor: grab;
	}
`

export const Superhero = styled(icon.Superhero)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(240, 100%, 50%, 1);
		stroke: hsla(0, 100%, 50%, 1);
		stroke-width: 8;
		cursor: grab;
	}
`

export const Tennessee = styled(icon.Tennessee)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(31, 100%, 48%, 1);
		stroke: hsla(360, 100%, 100%, 1);
		stroke-width: 8;
		cursor: grab;
	}
`
