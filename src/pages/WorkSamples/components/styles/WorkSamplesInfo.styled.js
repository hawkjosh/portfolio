import styled from 'styled-components'

const InfoWrapper = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	flex-direction: column;
	transition: opacity, transform, visibility;
	transition-duration: 1s;
	transition-timing-function: ease-in-out;
	overflow-y: scroll;

	@media (width >= 1280px) {
		gap: 1rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			gap: 0.25rem;

			@media (height < 500px) {
				gap: 0.125rem;
			}
		}
		@media (orientation: portrait) {
			gap: 1rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			gap: 0.5rem;
		}
		@media (orientation: portrait) {
			gap: 0.5rem;
		}
	}

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(100%) scale(0);
		visibility: hidden;

		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				@media (height < 500px) {
					transform: translateY(-100%) scale(0);
				}
			}
		}
	}
`

const InfoTitle = styled.h2`
	text-align: center;
	text-transform: uppercase;

	@media (width >= 1280px) {
		font-size: 2.25rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			font-size: 1.75rem;

			@media (height < 500px) {
				font-size: 1.5rem;
			}
		}
		@media (orientation: portrait) {
			font-size: 2rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			font-size: 1.625rem;
		}
		@media (orientation: portrait) {
			font-size: 1.875rem;
		}
	}
`

const InfoText = styled.p`
	font-weight: 200;

	@media (width >= 1280px) {
		font-size: 1.75rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			font-size: 1.625rem;

			@media (height < 500px) {
				font-size: 0.953122rem;
			}
		}
		@media (orientation: portrait) {
			font-size: 1.5rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			font-size: 1rem;
		}
		@media (orientation: portrait) {
			font-size: 1.125rem;
		}
	}
`

export { InfoWrapper, InfoTitle, InfoText }
