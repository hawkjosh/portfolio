import styled, { keyframes } from 'styled-components'

import { CloseBtnIcon } from '../CloseBtnIcon.jsx'

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

const ToolboxBackground = styled.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	background-color: hsla(0, 0%, 78%, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`

const ToolboxContainer = styled.div`
	position: absolute;
	height: 80%;
	top: 50%;
	transform: translateY(-50%);
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: hsla(360, 100%, 100%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
	padding: 0.5rem 1.25rem 1.75rem;
	overflow-y: auto;
	scrollbar-width: none;

	@media (width >= 1280px) {
		width: 70%;
		left: 15%;
	}
	@media (960px <= width < 1280px) {
		width: 75%;
		left: 12.5%;
	}
	@media (640px <= width < 960px) {
		width: 80%;
		left: 10%;

		@media (orientation: landscape) {
			width: 90%;
			left: 5%;
		}
	}
	@media (width < 640px) {
		width: 90%;
		left: 5%;
	}
`

const ToolboxCloseBtnWrapper = styled.div`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	width: 5%;
	min-width: 1.75rem;
	max-width: 2.5rem;
`

const ToolboxCloseBtn = styled(CloseBtnIcon)`
	fill: var(--color-secondary);

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 3;
		cursor: pointer;
	}
`

const ToolboxIconsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	/* gap: clamp(2.5rem, 2rem + 1.25vw, 3rem); */
	row-gap: 2rem;
	column-gap: 1.25rem;
	margin: 2.5rem 5%;

	@media (640px <= width < 960px) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media (width < 640px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Tooltip = styled.div`
	position: absolute;
	color: var(--color-secondary);
	width: max-content;
	justify-content: center;
	align-items: center;
	font-size: clamp(0.75rem, 0.667rem + 0.417vw, 1rem);
	font-weight: 900;
	z-index: 1;
	top: 0;
	transform: translateY(-125%);
	display: none;
`

const ToolboxIcon = styled.div`
	position: relative;
	display: flex;
	place-content: center;
	transition: transform 0.25s ease-in-out;

	&:hover {
		transform: scale(1.125);
		cursor: pointer;

		& ${Tooltip} {
			animation: ${tooltipHover} 0.5s ease-in-out;
			display: flex;
		}
	}
`

export {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	ToolboxIconsWrapper,
	Tooltip,
	ToolboxIcon,
}
