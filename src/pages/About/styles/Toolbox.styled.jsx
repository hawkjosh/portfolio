import { styled, keyframes } from 'styled-components'
import { media } from '../../../GlobalStyle.jsx'
import * as faIcon from '@styled-icons/fa-solid'

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
	max-width: 80rem;
	max-height: 95%;
	margin: auto;
	border: none;
	border-radius: 2rem;
	outline: none;
	background: hsla(20, 14%, 96%, 0.75);
	box-shadow: 0.75rem 0.75rem 0.375rem 0 hsla(0, 0%, 0%, 0.75);
	padding: 0.75rem 1.25rem 0.5rem;
	overflow-y: auto;
	scrollbar-width: none;
	animation: ${fadeIn} 1000ms ease both;
	&::backdrop {
		animation: ${fadeIn} 1000ms ease both;
		background: hsla(0, 0%, 0%, 0.625);
	}
	@media ${media.xl} {
		width: 75%;
	}
	@media ${media.lg} {
		width: 80%;
		@media ${media.landscape} {
			width: 85%;
		}
	}
	@media ${media.md} {
		width: 85%;
		@media ${media.landscape} {
			width: 90%;
			max-height: calc(100dvh - 3rem);
		}
	}
	@media ${media.sm} {
		width: 90%;
		@media ${media.landscape} {
			width: 85%;
			height: calc(100dvh - 3rem);
			top: 1rem;
		}
	}
	@media ${media.xs} {
		width: 90%;
		@media ${media.landscape} {
			width: 85%;
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
	@media ${media.xl} {
		grid-template-columns: repeat(8, 1fr);
	}
	@media ${media.lg} {
		grid-template-columns: repeat(5, 1fr);
		@media ${media.landscape} {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	@media ${media.md} {
		grid-template-columns: repeat(5, 1fr);
		@media ${media.landscape} {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	@media ${media.sm} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${media.xs} {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const Tooltip = styled.span`
	visibility: hidden;
	position: absolute;
	width: min-content;
	color: ${({ $color }) => $color};
	text-shadow: ${({ $shadow }) =>
		`0.09375rem 0 ${$shadow}, 0 0.09375rem  ${$shadow}`};
	text-align: center;
	line-height: 0.9;
	font-size: clamp(0.75rem, 0.624rem + 0.469vw, 1rem);
	font-weight: 900;
	top: ${({ $top }) => $top};
	left: 50%;
	transform: translateX(-50%);
`

// export const Icon = styled.svg`
// 	position: relative;
// 	aspect-ratio: 1 / 1;
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	color: ${({ $color }) => $color};
// 	filter: contrast(10%);
// 	cursor: pointer;
// 	transition-property: transform, filter;
// 	transition-duration: 250ms;
// 	transition-timing-function: ease-in-out;
// 	&:hover {
// 		transform: scale(1.125);
// 		filter: contrast(125%);
// 		& ${Tooltip} {
// 			animation: ${tooltipHover} 500ms ease-in-out;
// 			visibility: visible;
// 		}
// 	}
// `

// export const Icon = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	cursor: pointer;
// 	transition-property: transform, filter;
// 	transition-duration: 250ms;
// 	transition-timing-function: ease-in-out;
// 	&:hover {
// 		transform: scale(1.125);
// 		filter: contrast(125%);
// 		& ${Tooltip} {
// 			animation: ${tooltipHover} 500ms ease-in-out;
// 			visibility: visible;
// 		}
// 	}
// `

export const Icon = styled.div`
	width: 100%;
	filter: contrast(10%);
	cursor: pointer;
	transition-property: transform, filter;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		filter: contrast(125%);
		& ${Tooltip} {
			animation: ${tooltipHover} 500ms ease-in-out;
			visibility: visible;
		}
	}
`

export const CloseBtn = styled(faIcon.CircleXmark)`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	width: 5%;
	min-width: 1.5rem;
	max-width: 2rem;
	color: var(--color-secondary);
	filter: contrast(50%);
	cursor: pointer;
	transition-property: filter, transform;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		filter: contrast(100%);
		transform: scale(1.125);
	}
`
