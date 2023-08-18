import { styled, keyframes } from 'styled-components'
import { CircleXmark } from '@styled-icons/fa-solid'

const tooltipHover = keyframes`
	from {
		scale: 0;
		opacity: 0;
	}
	to {
		scale: 1;
		opacity: 1;
	}
`

export const Background = styled.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	background-color: hsla(0, 0%, 78%, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;
`

export const Container = styled.div`
	position: absolute;
	max-width: 60rem;
	height: calc(100vh - 8rem);
	height: calc(100dvh - 8rem);
	top: 6rem;
	left: 50%;
	transform: translateX(-50%);
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: hsla(360, 100%, 100%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
	padding: 0.75rem 1.25rem 0.5rem;
	overflow-y: auto;
	scrollbar-width: none;

	@media (width >= 1280px) {
		width: 75%;
	}
	@media (960px <= width < 1280px) {
		width: 80%;

		@media (orientation: landscape) {
			width: 75%;
		}
	}
	@media (640px <= width < 960px) {
		width: 85%;

		@media (orientation: landscape) {
			width: 80%;
			height: calc(100vh - 3rem);
			height: calc(100dvh - 3rem);
			top: 2rem;
		}
	}
	@media (width < 640px) {
		width: 90%;

		@media (orientation: landscape) {
			width: 85%;
			height: calc(100vh - 3rem);
			height: calc(100dvh - 3rem);
			top: 1rem;
		}
	}
`

export const Wrapper = styled.div`
	display: grid;
	row-gap: clamp(2.25rem, 1.722rem + 2.222vw, 3.5rem);
	column-gap: clamp(1.5rem, 0.867rem + 2.667vw, 3rem);
	margin: 2.5rem 5%;

	@media (width >= 1280px) {
		grid-template-columns: repeat(8, 1fr);
	}
	@media (960px <= width < 1280px) {
		grid-template-columns: repeat(6, 1fr);
	}
	@media (640px <= width < 960px) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media (width < 640px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const Tooltip = styled.div`
	position: absolute;
	color: ${({ $color }) => $color};
	text-align: center;
	line-height: 1;
	font-size: clamp(0.625rem, 0.414rem + 0.889vw, 1.125rem);
	font-weight: 900;
	top: 0;
	transform: ${({ $transform }) => $transform || 'translateY(-125%)'};
	display: none;
`

export const Icon = styled.div`
	position: relative;
	display: flex;
	place-content: center;
	filter: contrast(0%);
	transition-property: transform, filter;
	transition-duration: 0.25s;
	transition-timing-function: ease-in-out;

	&:hover {
		transform: scale(1.125);
		filter: contrast(100%);
		cursor: pointer;

		& ${Tooltip} {
			animation: ${tooltipHover} 0.5s ease-in-out;
			display: block;
		}
	}
`

export const CloseBtn = styled(CircleXmark)`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	width: 5%;
	min-width: 1.75rem;
	max-width: 2.5rem;
	color: var(--color-secondary);
	filter: contrast(0%);
	cursor: pointer;
	transition: filter 250ms ease-in-out, transform 250ms ease-in-out;

	&:hover {
		filter: contrast(100%);
		transform: scale(1.125);
	}
`
