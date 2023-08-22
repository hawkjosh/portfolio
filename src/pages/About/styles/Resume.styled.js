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

export const Modal = styled.dialog`
	width: clamp(23.125rem, 3.857rem + 79.048vw, 75rem);
	max-height: calc(100dvh - 8rem);
	margin: auto;
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	padding: 0.75rem 1.25rem 0.5rem;
	background: hsla(360, 100%, 100%, 1);
	overflow-y: auto;
	scrollbar-width: none;
	box-shadow: 0px 5px 30px hsla(0, 0%, 0%, 0.35);
	animation: ${fadeIn} 1000ms ease both;

	&::backdrop {
		animation: ${fadeIn} 1000ms ease both;
		background: hsla(0, 0%, 78%, 0.5);
	}

	@media (width < 960px) and (orientation: landscape) {
		width: 90%;
		height: calc(100dvh - 3rem);
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin: 2.5rem 0.5rem 0;
`

export const Image = styled.img`
	width: clamp(21rem, 5.029rem + 65.524vw, 64rem);
	border: 0.03125rem solid hsla(0, 0%, 83%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
`

export const DownloadBtn = styled.button`
	font-size: 1.125rem;
	text-transform: uppercase;
	color: hsla(360, 100%, 100%, 1);
	background-color: var(--color-secondary);
	border: 0.25rem solid transparent;
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	transition: all 0.25s ease-in-out;

	&:hover {
		color: var(--color-secondary);
		background-color: var(--color-primary);
		border-color: var(--color-secondary);
		cursor: pointer;
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
