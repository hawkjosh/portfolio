import React, { useEffect, useRef, useState } from 'react'
import * as Styled from '../styles/WorkSamplesLinkBtn.styled.jsx'

export const WorkSamplesLinkBtn = ({ icon, text, link }) => {
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
		<>
			<Styled.Button
				ref={buttonRef}
				data-expand={expanded ? true : null}
				onClick={handleExpandClick}>
				{icon}
				{expanded && (
					<Styled.Text onClick={handleLinkClick}>{text}</Styled.Text>
				)}
			</Styled.Button>
		</>
	)
}
