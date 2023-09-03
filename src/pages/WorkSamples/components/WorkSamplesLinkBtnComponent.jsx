import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { screen } from '../../../GlobalStyle.jsx'

export const WorkSamplesLinkBtnComponent = ({ icon, text, link }) => {
	const [expanded, setExpanded] = useState(false)
	const buttonRef = useRef(null)

	const handleExpandClick = () => {
		setExpanded(true)
	}

	const handleLinkClick = (e) => {
		e.stopPropagation()
		window.open(link, '_blank', 'noreferrer')
		setExpanded(false)
	}

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (buttonRef.current && !buttonRef.current.contains(e.target)) {
				setExpanded(false)
			}
		}

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	return (
		<Button
			ref={buttonRef}
			data-expand={expanded ? true : null}
			onClick={handleExpandClick}>
			{icon}
			{expanded && <Text onClick={handleLinkClick}>{text}</Text>}
		</Button>
	)
}

// Styled-Components
const Button = styled.div`
	width: clamp(2rem, 1.498rem + 1.878vw, 3rem);
	height: clamp(2.5rem, 1.998rem + 1.878vw, 3.5rem);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border: none;
	border-radius: 1rem;
	background: transparent;
	font-size: 0;
	color: hsla(360, 100%, 100%, 1);
	transition-property: background, border-radius, color, font-size, width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	z-index: 1;
	& svg {
		width: clamp(2rem, 1.749rem + 0.939vw, 2.5rem);
		color: var(--color-secondary);
		transition-property: transform, color;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;
		@media ${screen.landscape} {
			width: clamp(1.5rem, 1.249rem + 0.939vw, 2rem);
		}
	}
	&:hover > svg {
		color: hsla(360, 100%, 100%, 1);
	}
	&[data-expand] {
		width: clamp(9rem, 7.493rem + 5.634vw, 12rem);
		height: clamp(2.5rem, 1.998rem + 1.878vw, 3.5rem);
		font-size: clamp(0.875rem, 0.687rem + 0.704vw, 1.25rem);
		border-radius: 2rem;
		background: var(--color-secondary);
		& svg {
			color: hsla(360, 100%, 100%, 1);
			transform: scale(0.75);
		}
		@media ${screen.landscape} {
			width: clamp(9.5rem, 5.75rem + 7.813vw, 12rem);
			height: clamp(2rem, 1.498rem + 1.878vw, 3rem);
		}
	}
`

const Text = styled.div`
	font-size: inherit;
	color: inherit;
`
