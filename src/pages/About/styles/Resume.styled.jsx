import { styled, keyframes } from 'styled-components'
import * as icon from '@styled-icons/fa-solid'

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

export const Modal = styled.dialog`
	max-height: 95%;
	margin: auto;
	padding: 0.5rem;
	padding-bottom: 0.25rem;
	border-radius: 0.125rem;
	border: none;
	outline: none;
	background: hsla(360, 100%, 100%, 1);
	overflow-y: auto;
	scrollbar-width: none;
	box-shadow: 0.75rem 0.75rem 0.375rem 0 hsla(0, 0%, 0%, 0.75);
	animation: ${fadeIn} 1000ms ease both;
	&::backdrop {
		animation: ${fadeIn} 1000ms ease both;
		background: hsla(0, 0%, 0%, 0.625);
	}
`

export const Wrapper = styled.div`
	position: relative;
`

export const Image = styled.img`
	aspect-ratio: 8.5/11;
	width: 100%;
`

export const CloseBtn = styled(icon.CircleXmark)`
	position: absolute;
	top: 0.125rem;
	right: 0.125rem;
	width: 5%;
	min-width: 1.5rem;
	max-width: 2rem;
	color: hsla(211, 30%, 24%, 0.625);
	cursor: pointer;
	transition-property: color, transform;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		color: hsla(211, 30%, 24%, 1);
		transform: scale(1.125);
	}
`

export const DownloadBtn = styled.div`
	position: absolute;
	bottom: 0.125rem;
	left: 50%;
	transform: translateX(-50%);
	width: max-content;
	font-size: 1.125rem;
	font-weight: bold;
	text-transform: uppercase;
	color: hsla(360, 100%, 100%, 1);
	background: hsla(211, 30%, 24%, 0.625);
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition-property: background, transform;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		background: hsla(211, 30%, 24%, 1);
		transform: translate(calc(-50% + 0.125rem), -0.09375rem);
	}
`
