import React from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize.js'
import { useLocation } from 'react-router-dom'
import * as styled from '../styles/Footer.styled.js'

export const Footer = () => {
	const { isWideScreen } = useWindowSize()
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	return (
		<styled.Footer $height={staticNav ? '3rem' : '4rem'}>
			{isWideScreen ? (
				<>
					<styled.Copywrite>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</styled.Copywrite>
					<styled.Logo />
				</>
			) : (
				<>
					<styled.LinkedIn $width={staticNav ? '1.75rem' : '2rem'} />
					<styled.GitHub $width={staticNav ? '1.75rem' : '2rem'} />
					<styled.Codepen $width={staticNav ? '1.75rem' : '2rem'} />
					<styled.StackOverflow $width={staticNav ? '1.75rem' : '2rem'} />
				</>
			)}
		</styled.Footer>
	)
}
