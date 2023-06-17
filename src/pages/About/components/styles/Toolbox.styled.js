import styled from 'styled-components'
import { responsive } from '../../../../GlobalStyle.js'
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
	width: 85%;
	position: absolute;
	left: 7.5%;
	height: calc(100vh - 8.5rem);
	height: calc(100dvh - 8.5rem);
	top: 4rem;
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: hsla(0, 0%, 100%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
	padding: 0.5rem 1.25rem 1.75rem;
	overflow-y: auto;
	scrollbar-width: none;

	${responsive.tablet`
    width: 80%;
    left: 10%;
  `}

	${responsive.laptop`
    width: 70%;
    right: 15%;
  `}
`

const ToolboxCloseBtnWrapper = styled.div`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
`

const ToolboxCloseBtn = styled(CloseBtnIcon)`
	width: clamp(1.75rem, 1.429rem + 1.429vw, 2rem);
	fill: var(--color-secondary);

	&:hover {
		fill: hsla(0, 0%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 3;
		cursor: pointer;
	}

	${responsive.tablet`
    width: clamp(1.875rem, 1.375rem + 1.25vw, 2.125rem);
  `}

	${responsive.laptop`
    width: clamp(2.25rem, 1.417rem + 1.042vw, 2.5rem);
  `}
`

const ToolboxIconsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	row-gap: 2.5rem;
	column-gap: calc(10% / 3);
	margin: 2.5rem 5% 0;

	${responsive.tablet`
    row-gap: 2.75rem;
    column-gap: 2%;
  `}

	${responsive.laptop`
    row-gap: 3rem;
    column-gap: 2%;
  `}
`

const ToolboxIcon = styled.img`
	width: 20%;
	aspect-ratio: 3/2;
	object-fit: contain;
	transition: transform 0.25s ease-in-out;

	&:hover {
		transform: scale(1.25);
		cursor: pointer;
	}

	${responsive.tablet`
    width: calc(80% / 6);
  `}

	${responsive.laptop`
    width: calc(80% / 6);
  `}
`

export {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	ToolboxIconsWrapper,
	ToolboxIcon,
}
