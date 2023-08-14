import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize.js'

import { LinkBtn, BtnText } from './styles/WorkSamplesLinkBtn.styled.js'

export const WorkSamplesLinkBtn = ({ icon, text, link }) => {
	const [expanded, setExpanded] = useState(false)
	const buttonRef = useRef(null)
	const { isTablet, isShortScreen, isPortrait } = useWindowSize()

	const handleExpandClick = () => {
		setExpanded(true)
	}

	const handleLinkClick = () => {
		window.open(link, '_blank', 'noopener,noreferrer')
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
			<LinkBtn
				ref={buttonRef}
				data-expand={expanded && 'expanded'}
				onClick={
					isTablet && !isPortrait && isShortScreen
						? handleLinkClick
						: handleExpandClick
				}>
				{icon}
				{expanded && <BtnText onClick={handleLinkClick}>{text}</BtnText>}
			</LinkBtn>
		</>
	)
}
