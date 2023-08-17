import { styled } from 'styled-components'

import { CloseBtnIcon } from '../CloseBtnIcon.jsx'

const ResumeBackground = styled.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	background-color: hsla(0, 0%, 78%, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`

const ResumeContainer = styled.div`
	position: absolute;
	width: clamp(23.125rem, 3.857rem + 79.048vw, 75rem);
	height: calc(100vh - 8rem);
	height: calc(100dvh - 8rem);
	top: 6rem;
	left: 50%;
	transform: translateX(-50%);
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: white;
	box-shadow: 0px 5px 30px hsla(0, 0%, 0%, 0.35);
	padding: 0.5rem 0.25rem 1.5rem;
	overflow-y: auto;
	scrollbar-width: none;
	z-index: 2;

	@media (width < 960px) and (orientation: landscape) {
		height: calc(100vh - 3rem);
		height: calc(100dvh - 3rem);
		top: 2rem;
	}
`

const ResumeContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin: 2.5rem 0.5rem 0;
`

const ResumePic = styled.img`
	width: clamp(21rem, 5.029rem + 65.524vw, 64rem);
	border: 0.03125rem solid hsla(0, 0%, 83%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
`

const DownloadBtn = styled.button`
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

const ResumeCloseBtnWrapper = styled.div`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
  width: 5%;
	min-width: 1.75rem;
	max-width: 2.5rem;
`

const ResumeCloseBtn = styled(CloseBtnIcon)`
	fill: var(--color-secondary);

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 3;
		cursor: pointer;
	}
`

export {
	ResumeBackground,
	ResumeContainer,
	ResumeContentWrapper,
	ResumePic,
	DownloadBtn,
	ResumeCloseBtnWrapper,
	ResumeCloseBtn,
}
