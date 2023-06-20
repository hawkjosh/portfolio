import React, { useRef, useState } from 'react'
import { useWindowSize } from '../../Layout/components/hooks/useWindowSize.js'

import { LinkBtn, BtnText } from './styles/WorkSamplesLinkBtn.styled.js'

export const WorkSamplesLinkBtn = ({ icon, text }) => {
	const [isHovered, setIsHovered] = useState(false)
	const buttonRef = useRef(null)
	const { isTablet, isShortScreen, isPortrait } = useWindowSize()

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<>
			{isTablet && !isPortrait && isShortScreen ? (
				<LinkBtn
					ref={buttonRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{icon}
				</LinkBtn>
			) : (
				<LinkBtn
					ref={buttonRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{icon}
					{isHovered && <BtnText>{text}</BtnText>}
				</LinkBtn>
			)}
		</>
	)
}
