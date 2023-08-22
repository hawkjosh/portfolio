import { styled, keyframes } from 'styled-components'
import { CircleXmark } from '@styled-icons/fa-solid'

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

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

export const Modal = styled.dialog`
	max-width: 60rem;
	max-height: calc(100dvh - 8rem);
	margin: auto;
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background: hsla(360, 100%, 100%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
	padding: 0.75rem 1.25rem 0.5rem;
	overflow-y: auto;
	scrollbar-width: none;
	animation: ${fadeIn} 1000ms ease both;

	&::backdrop {
		animation: ${fadeIn} 1000ms ease both;
		background: hsla(0, 0%, 78%, 0.5);
	}

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
			width: 90%;
			max-height: calc(100dvh - 3rem);
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
		@media (orientation: landscape) {
			grid-template-columns: repeat(8, 1fr);
		}
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
	filter: contrast(75%);
	cursor: pointer;
	transition: filter 250ms ease-in-out, transform 250ms ease-in-out;

	&:hover {
		filter: contrast(100%);
		transform: scale(1.125);
	}
`
