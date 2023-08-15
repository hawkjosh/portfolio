import styled from 'styled-components'

import { CircleChevronLeft, CircleChevronRight } from '@styled-icons/fa-solid'

const StyledContainer = styled.div`
	display: grid;
	height: calc(100vh - 8rem);
	height: calc(100dvh - 8rem);
	overflow: hidden;

	@media (width >= 1280px) {
		grid-template-columns: 65% 35%;
		grid-template-rows: 90% 10%;
	}
	@media (960px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-template-columns: 60% 40%;
			grid-template-rows: 85% 15%;
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 40% 10%;
		}
	}
	@media (640px <= width < 960px) {
		@media (orientation: landscape) {
			grid-template-columns: 60% 40%;
			grid-template-rows: 85% 15%;

			@media (height < 450px) {
				grid-template-rows: 80% 20%;
			}
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 40% 10%;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-template-columns: 55% 45%;
			grid-template-rows: 85% 15%;

			@media (height < 450px) {
				grid-template-rows: 80% 20%;
			}
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 40% 10%;
		}
	}
`

const ImageSection = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

	@media (width >= 1280px) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
		border-right: solid hsla(360, 100%, 100%, 1);
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
			border-right: solid hsla(360, 100%, 100%, 1);
		}
		@media (orientation: portrait) {
			grid-row: 1 / 2;
			border-bottom: solid hsla(360, 100%, 100%, 1);
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
			border-right: solid hsla(360, 100%, 100%, 1);
		}
		@media (orientation: portrait) {
			grid-row: 1 / 2;
			border-bottom: solid hsla(360, 100%, 100%, 1);
		}
	}
`

const Image = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	background-size: cover;
	background-repeat: no-repeat;
	transition: all 1s ease-in-out;
	z-index: -1;

	@media (width < 640px) {
		&:nth-of-type(6) {
			background-position: center top;
		}
	}

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(-100%) scale(0);
		visibility: hidden;
	}
`

const PrevArrow = styled(CircleChevronLeft)`
	display: block;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 5%;
	width: clamp(3rem, 2.156rem + 3.556vw, 5rem);
	color: hsla(211, 30%, 24%, 1);
	opacity: 0.625;
	transition-property: transform, opacity;
	transition-duration: 0.25s;
	transition-timing-function: ease-in-out;

	&:hover {
		transform: translateY(-50%) scale(1.25);
		opacity: 0.875;
		cursor: pointer;
	}
`

const NextArrow = styled(CircleChevronRight)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 5%;
	width: clamp(3rem, 2.156rem + 3.556vw, 5rem);
	color: hsla(211, 30%, 24%, 1);
	opacity: 0.625;
	transition-property: transform, opacity;
	transition-duration: 0.25s;
	transition-timing-function: ease-in-out;

	&:hover {
		transform: translateY(-50%) scale(1.25);
		opacity: 0.875;
		cursor: pointer;
	}
`

const InfoSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		padding: 1.25rem 1rem 0rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			padding: 0.5rem 0.75rem 0.25rem;
		}
		@media (orientation: portrait) {
			grid-row: 2 / 3;
			padding: 0.75rem 1rem 0.5rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			padding: 0.25rem 0.5rem 0rem;
		}
		@media (orientation: portrait) {
			grid-row: 2 / 3;
			padding: 0.5rem 0.75rem 0.25rem;
		}
	}
`

const LinkSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	width: 100%;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
		@media (orientation: portrait) {
			grid-row: 3 / 4;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
		@media (orientation: portrait) {
			grid-row: 3 / 4;
		}
	}
`

export {
	StyledContainer,
	ImageSection,
	Image,
	PrevArrow,
	NextArrow,
	InfoSection,
	LinkSection,
}
