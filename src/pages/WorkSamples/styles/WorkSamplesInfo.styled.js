import { styled } from 'styled-components'

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.75rem 1.25rem;
	opacity: 0;

	&[data-active] {
		opacity: 1;
		z-index: 1;
	}
`

export const Title = styled.h2`
	text-align: center;
	text-transform: uppercase;

	@media (width >= 80rem) {
		font-size: 2.75rem;
	}

	@media (60rem <= width < 80rem) {
		font-size: 2.5rem;

		@media (orientation: landscape) {
			font-size: 2rem;
		}
	}

	@media (40rem <= width < 60rem) {
		font-size: 2.25rem;

		@media (orientation: landscape) {
			font-size: 2rem;
		}
	}

	@media (width < 40rem) {
		font-size: 1.75rem;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

export const Text = styled.p`
	font-weight: 200;

	@media (width >= 80rem) {
		font-size: 1.625rem;
	}

	@media (60rem <= width < 80rem) {
		font-size: 1.5rem;

		@media (orientation: landscape) {
			font-size: 1.375rem;
		}
	}

	@media (40rem <= width < 60rem) {
		font-size: 1.375rem;

		@media (orientation: landscape) {
			font-size: 1.125rem;
		}
	}

	@media (width < 40rem) {
		font-size: 1.125rem;
	}
`
