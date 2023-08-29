import { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import * as faIcon from '@styled-icons/fa-solid'

export const Resume = ({ openResume, closeResume }) => {
	const ref = useRef()

	useEffect(() => {
		if (openResume) {
			ref.current.showModal()
			ref.current.scrollTop = 0
		} else {
			ref.current.close()
		}
	}, [openResume])

	const handleDownload = () => {
		window.open(
			'https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI',
			'_blank',
			'noreferrer'
		)
		setShowResume(false)
	}

	return (
		<Modal
			ref={ref}
			onCancel={closeResume}>
			<ResumeContainer>
				<Image
					src='/resume.png'
					alt='My Resume'
				/>
				<CloseBtn onClick={closeResume} />
				<DownloadBtn onClick={handleDownload}>Download</DownloadBtn>
			</ResumeContainer>
		</Modal>
	)
}

// Styled-Components
const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const Modal = styled.dialog`
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

const ResumeContainer = styled.div`
	position: relative;
`

const Image = styled.img`
	aspect-ratio: 8.5/11;
	width: 100%;
`

const CloseBtn = styled(faIcon.CircleXmark)`
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

const DownloadBtn = styled.div`
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
