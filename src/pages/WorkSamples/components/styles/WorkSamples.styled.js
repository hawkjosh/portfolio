import styled from 'styled-components'

import { LeftArrowIcon } from '../../components/LeftArrowIcon.jsx'
import { RightArrowIcon } from '../../components/RightArrowIcon.jsx'

const StyledContainer = styled.div`
	display: grid;
	height: calc(100vh - 10rem);
	height: calc(100dvh - 10rem);
	overflow: hidden;

	@media (width >= 1280px) {
		grid-template-columns: 65% 35%;
		grid-template-rows: 75% 12.5% 12.5%;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-template-columns: 60% 40%;
			grid-template-rows: 75% 12.5% 12.5%;

			@media (height < 500px) {
				grid-template-columns: 50% 42.5% 7.5%;
				grid-template-rows: 82.5% 17.5%;
			}
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 35% 7.5% 7.5%;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-template-columns: 55% 45%;
			grid-template-rows: 70% 15% 15%;
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 35% 7% 8%;
		}
	}
`

const ImageSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

	@media (width >= 1280px) {
		grid-column: 1 / 2;
		grid-row: 1 / 4;
		border-right: solid white;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 4;
			border-right: solid hsla(360, 100%, 100%, 1);

			@media (height < 500px) {
				grid-column: 1 / 2;
				grid-row: 1 / 3;
				border-right: solid hsla(360, 100%, 100%, 1);
			}
		}
		@media (orientation: portrait) {
			grid-row: 1 / 2;
			border-bottom: solid hsla(360, 100%, 100%, 1);
		}
	}
	@media (width < 640px) {
		z-index: -1;
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 4;
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

			@media (height < 500px) {
				padding: 0.25rem 0.5rem 0.125rem;
			}
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

			@media (height < 500px) {
				grid-column: 3 / 4;
				grid-row: 1 / 3;
				border-left: solid hsla(360, 100%, 100%, 1);
			}
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

const NavSection = styled.div`
	display: flex;
	justify-content: space-evenly;
	border-top: solid hsla(360, 100%, 100%, 1);
	cursor: pointer;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 3 / 4;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 3 / 4;

			@media (height < 500px) {
				grid-column: 2 / 3;
				grid-row: 2 / 3;
			}
		}
		@media (orientation: portrait) {
			grid-row: 4 / 5;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
		}
		@media (orientation: portrait) {
			grid-row: 4 / 5;
		}
	}
`

const LeftArrow = styled(LeftArrowIcon)`
	fill: hsla(360, 100%, 100%, 1);
	transition: transform 0.375s ease-in-out;

	@media (width >= 1280px) {
		width: 3rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
`

const RightArrow = styled(RightArrowIcon)`
	fill: hsla(360, 100%, 100%, 1);
	transition: transform 0.375s ease-in-out;

	@media (width >= 1280px) {
		width: 3rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
`

const ArrowIconWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	transition: all 0.375s ease-in-out;

	&:nth-of-type(2) {
		border-left: solid hsla(360, 100%, 100%, 1);
	}

	&:hover {
		background-color: hsla(211, 30%, 24%, 0.5);

		& > ${LeftArrow}, ${RightArrow} {
			transform: scale(1.25);
		}
	}
`

export {
	StyledContainer,
	ImageSection,
	Image,
	InfoSection,
	LinkSection,
	NavSection,
	ArrowIconWrapper,
	LeftArrow,
	RightArrow,
}
