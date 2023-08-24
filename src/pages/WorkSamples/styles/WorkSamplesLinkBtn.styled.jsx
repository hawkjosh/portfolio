import { styled } from 'styled-components'

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border: none;
	border-radius: 1rem;
	background: transparent;
	font-size: 0;
	color: hsla(360, 100%, 100%, 1);
	transition-property: background, border-radius, color, font-size, width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	z-index: 1;
	&:hover {
		color: hsla(360, 100%, 100%, 1);
	}
	& svg {
		color: var(--color-secondary);
		transition-property: transform, color;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;
		@media (width >= 80rem) {
			width: 3rem;
		}
		@media (60rem <= width < 80rem) {
			width: 2.75rem;
			@media (orientation: landscape) {
				width: 2rem;
			}
		}
		@media (40rem <= width < 60rem) {
			width: 2.5rem;
			@media (orientation: landscape) {
				width: 1.5rem;
			}
		}
		@media (width < 40rem) {
			width: 2rem;
		}
	}
	&[data-expand] {
		border-radius: 2rem;
		background: var(--color-secondary);
		& svg {
			color: hsla(360, 100%, 100%, 1);
			transform: scale(0.75);
		}
		@media (width >= 80rem) {
			width: 12rem;
			font-size: 1.25rem;
		}
		@media (60rem <= width < 80rem) {
			width: 11rem;
			font-size: 1.125rem;
			@media (orientation: landscape) {
				width: 10rem;
				font-size: 1rem;
			}
		}
		@media (40rem <= width < 60rem) {
			width: 10rem;
			font-size: 1rem;
			@media (orientation: landscape) {
				width: 9rem;
				font-size: 0.875rem;
			}
		}
		@media (width < 40rem) {
			width: 9rem;
			font-size: 0.875rem;
			@media (orientation: landscape) {
			}
		}
	}
	@media (width >= 80rem) {
		width: 3rem;
		height: 3.5rem;
	}
	@media (60rem <= width < 80rem) {
		width: 2.75;
		height: 3.25rem;
		@media (orientation: landscape) {
			width: 2rem;
			height: 2.5rem;
		}
	}
	@media (40rem <= width < 60rem) {
		width: 2.5rem;
		height: 3rem;
		@media (orientation: landscape) {
			width: 1.5rem;
			height: 2rem;
		}
	}
	@media (width < 40rem) {
		width: 2rem;
		height: 2.5rem;
	}
`

export const Text = styled.div`
	font-size: inherit;
	color: inherit;
`
