import styled from 'styled-components'

const LinkBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border-radius: 50%;
	background-color: transparent;
	font-size: 0;
	color: hsla(360, 100%, 100%, 1);
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	border: none;

	@media (width >= 1280px) {
		width: 3rem;
		height: 3.5rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2.5rem;
			height: 3rem;
		}
		@media (orientation: portrait) {
			width: 2.5rem;
			height: 3rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
			height: 2.5rem;
		}
		@media (orientation: portrait) {
			width: 2rem;
			height: 2.5rem;
		}
	}

	& svg {
		fill: var(--color-secondary);
		transition: fill 0.25s ease-in-out;

		@media (width >= 1280px) {
			width: 3rem;
		}
		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				width: 2.5rem;

				@media (height < 500px) {
					transition: fill 0.25s ease-in-out, transform 0.5s ease-in-out;
				}
			}
			@media (orientation: portrait) {
				width: 2.5rem;
			}
		}
		@media (width < 640px) {
			@media (orientation: landscape) {
				width: 2rem;
			}
			@media (orientation: portrait) {
				width: 2rem;
			}
		}
		&:hover {
			fill: hsla(360, 100%, 100%, 1);
		}
	}

	&[data-expand|='expanded'] {
		border-radius: 2rem;
		background-color: var(--color-secondary);

		& > svg {
			fill: hsla(360, 100%, 100%, 1);
		}

		@media (width >= 1280px) {
			width: 11rem;
			font-size: 1.125rem;
		}
		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				width: 10rem;
				font-size: 1rem;

				@media (height < 500px) {
					width: 2.5rem;
					background-color: transparent;
					transform: scale(1.25);
				}
			}
			@media (orientation: portrait) {
				width: 10rem;
				font-size: 1rem;
			}
		}
		@media (width < 640px) {
			@media (orientation: landscape) {
				width: 9rem;
				font-size: 0.875rem;
			}
			@media (orientation: portrait) {
				width: 9rem;
				font-size: 0.875rem;
			}
		}
	}
`

const BtnText = styled.span`
	font-size: inherit;
	color: inherit;
`

export { LinkBtn, BtnText }
