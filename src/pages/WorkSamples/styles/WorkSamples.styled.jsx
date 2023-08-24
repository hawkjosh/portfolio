import { styled } from 'styled-components'
import * as faIcon from '@styled-icons/fa-solid'

export const Container = styled.div`
	display: grid;
	height: calc(100vh - 8rem);
	height: calc(100dvh - 8rem);
	overflow: hidden;
	@media (orientation: landscape) {
		grid-template-columns: 60% 40%;
		grid-template-rows: 90% 10%;
		@media (height <= 40rem) {
			grid-template-columns: 50% 50%;
			grid-template-rows: 80% 20%;
		}
	}
	@media (orientation: portrait) {
		grid-template-columns: 100%;
		grid-template-rows: 50% 40% 10%;
	}
`

export const ImageSection = styled.div`
	position: relative;
	width: 100%;
	@media (orientation: landscape) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
		border-right: solid hsla(360, 100%, 100%, 1);
	}
	@media (orientation: portrait) {
		grid-row: 1 / 2;
		border-bottom: solid hsla(360, 100%, 100%, 1);
	}
`

export const Image = styled.div`
	position: absolute;
	background-image: ${({ $image }) => $image};
	background-size: cover;
	background-repeat: no-repeat;
	inset: 0;
	opacity: 0;
	transition: opacity 500ms ease-in-out;
	transition-delay: 500ms;
	&[data-active] {
		opacity: 1;
		z-index: 1;
		transition-delay: 0ms;
	}
`

export const PrevArrow = styled(faIcon.CircleChevronLeft)`
	display: block;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 5%;
	background: transparent;
	width: clamp(3rem, 2.156rem + 3.556vw, 5rem);
	color: hsla(211, 30%, 24%, 1);
	opacity: 0.625;
	transition-property: transform, opacity;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	z-index: 2;
	&:hover {
		cursor: pointer;
		@media (hover: hover) {
			opacity: 0.875;
			transform: translateY(-50%) scale(1.25);
		}
	}
`

export const NextArrow = styled(faIcon.CircleChevronRight)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 5%;
	background: transparent;
	width: clamp(3rem, 2.156rem + 3.556vw, 5rem);
	color: hsla(211, 30%, 24%, 1);
	opacity: 0.625;
	transition-property: transform, opacity;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	z-index: 2;
	&:hover {
		cursor: pointer;
		@media (hover: hover) {
			opacity: 0.875;
			transform: translateY(-50%) scale(1.25);
		}
	}
`

export const InfoSection = styled.div`
	position: relative;
	width: 100%;
	overflow-y: auto;
	@media (orientation: landscape) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		border-bottom: solid hsla(360, 100%, 100%, 1);
	}
	@media (orientation: portrait) {
		grid-row: 2 / 3;
		border-bottom: solid hsla(360, 100%, 100%, 1);
	}
`

export const LinkSection = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	place-items: center;
	@media (orientation: landscape) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	@media (orientation: portrait) {
		grid-row: 3 / 4;
	}
`
