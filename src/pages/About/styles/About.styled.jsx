import { styled } from 'styled-components'
import { AboutIcon } from '../components/About.icons.jsx'

export const Container = styled.div`
	max-width: 90rem;
	height: ${({ $height }) => $height};
	margin: auto;
	padding: 2rem;
	overflow-y: ${({ $overflow }) => $overflow};
	@media (width < 40rem) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
`

export const Image = styled.img`
	background: var(--color-secondary);
	border: 0.25rem solid hsla(360, 100%, 100%, 1);
	border-radius: 50%;
	box-shadow: -0.375rem 0.375rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.4);
	object-fit: cover;
	float: right;
	shape-outside: ellipse(50% 50% at 50% 50%);
	margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
	margin-bottom: 1rem;
	padding: 0.5rem;
	@media (width >= 80rem) {
		width: 23rem;
	}
	@media (60rem <= width < 80rem) {
		width: clamp(20rem, 11rem + 15vw, 23rem);
	}
	@media (40rem <= width < 60rem) {
		width: clamp(18.5rem, 15.5rem + 7.5vw, 20rem);
	}
	@media (width < 40rem) {
		float: unset;
		shape-outside: unset;
		width: clamp(16rem, 12.1rem + 16vw, 18.5rem);
		margin: auto;
	}
`

export const TextWrapper = styled.div`
	@media (width >= 80rem) {
		margin-bottom: 2.5rem;
	}
	@media (60rem <= width < 80rem) {
		margin-bottom: clamp(2.25rem, 1.5rem + 1.25vw, 2.5rem);
	}
	@media (40rem <= width < 60rem) {
		margin-bottom: clamp(2rem, 1.5rem + 1.25vw, 2.25rem);
	}
	@media (width < 40rem) {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
`

export const Text = styled.div`
	font-weight: 200;
	text-align: justify;
	text-justify: inter-character;
	&:nth-of-type(1) {
		margin-bottom: clamp(1.75rem, 1.25rem + 1.25vw, 2.25rem);
		@media (width < 40rem) {
			margin-bottom: 0;
		}
	}
	@media (width >= 80rem) {
		font-size: 1.5rem;
		line-height: 1.75;
	}
	@media (60rem <= width < 80rem) {
		font-size: clamp(1.375rem, 1rem + 0.625vw, 1.5rem);
		line-height: 1.625;
	}
	@media (40rem <= width < 60rem) {
		font-size: clamp(1.25rem, 1rem + 0.625vw, 1.375rem);
		line-height: 1.5;
	}
	@media (width < 40rem) {
		font-size: clamp(1.125rem, 0.93rem + 0.8vw, 1.25rem);
		line-height: 1.375;
	}
`

export const BtnsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1rem;
	@media (width >= 90rem) {
		width: 75rem;
	}
	@media (60rem <= width < 90rem) {
		width: clamp(46rem, -12rem + 96.667vw, 75rem);
	}
`

export const Icon = styled(AboutIcon)`
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition-property: transform, fill, stroke;
	transition-duration: 250ms, 500ms, 500ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		transform: scale(1.125);
	}
	@media (width >= 80rem) {
		width: 16rem;
	}
	@media (60rem <= width < 80rem) {
		width: clamp(14rem, 8rem + 10vw, 16rem);
	}
	@media (40rem <= width < 60rem) {
		width: clamp(12rem, 8rem + 10vw, 14rem);
	}
	@media (width < 40rem) {
		width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	}
`
