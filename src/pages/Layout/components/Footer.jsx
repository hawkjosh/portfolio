import React from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize.js'
import { useLocation } from 'react-router-dom'

import {
	StyledFooter,
	FooterCopywrite,
	FooterLogo,
	LinkedIn,
	GitHub,
	Codepen,
	StackOverflow,
} from './styles/Footer.styled.js'

export const Footer = () => {
	const { isWideScreen } = useWindowSize()
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)


	return (
		<StyledFooter $height={staticNav ? '3rem' : '4rem'}>
			{isWideScreen ? (
				<>
					<FooterCopywrite>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</FooterCopywrite>
					<FooterLogo />
				</>
			) : (
				<>
					<LinkedIn />
					<GitHub />
					<Codepen />
					<StackOverflow />
				</>
			)}
		</StyledFooter>
	)
}
