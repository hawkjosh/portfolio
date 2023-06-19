import styled from 'styled-components'

import { CloseBtnIcon } from '../CloseBtnIcon.jsx'

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
		width: 85%;
		left: 7.5%;
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
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	row-gap: clamp(2.5rem, 2rem + 1.25vw, 3rem);
	margin: 2.5rem 5% 0;

	@media (width >= 1280px) {
		column-gap: 2%;
	}
	@media (960px <= width < 1280px) {
		column-gap: calc(10% / 3);
	}
	@media (640px <= width < 960px) {
		column-gap: 2%;
	}
	@media (width < 640px) {
		column-gap: calc(10% / 3);
	}
`

const ToolboxIcon = styled.img`
	aspect-ratio: 3/2;
	object-fit: contain;
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: calc(80% / 6);
		max-width: 8.625rem;
	}
	@media (960px <= width < 1280px) {
		width: calc(80% / 4);
	}
	@media (640px <= width < 960px) {
		width: calc(80% / 4);

		@media (orientation: landscape) {
			width: calc(80% / 6);
		}
	}
	@media (width < 640px) {
		width: calc(80% / 4);
		min-width: 3rem;
	}

	&:hover {
		transform: scale(1.25);
		cursor: pointer;
	}
`

export {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	ToolboxIconsWrapper,
	ToolboxIcon,
}
