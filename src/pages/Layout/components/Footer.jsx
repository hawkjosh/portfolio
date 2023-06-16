import React from 'react'

import { useWindowSize } from './hooks/useWindowSize.js'

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
	const { isLaptop } = useWindowSize()

	return (
		<StyledFooter>
			{isLaptop ? (
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
