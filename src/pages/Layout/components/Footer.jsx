import { useWindowSize } from '../../../hooks/useWindowSize.jsx'
import { useLocation } from 'react-router-dom'
import * as Styled from '../styles/Footer.styled.jsx'

export const Footer = () => {
	const { isWidthLg, isWidthXl } = useWindowSize()
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	const socialIcons = [
		{
			icon: <Styled.LinkedIn $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
		},
		{
			icon: <Styled.GitHub $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://github.com/hawkjosh',
		},
		{
			icon: <Styled.CodePen $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://codepen.io/hawkjosh',
		},
		{
			icon: <Styled.StackOverflow $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
		},
	]

	return (
		<Styled.Footer $height={staticNav ? '3rem' : '4rem'}>
			{isWidthLg || isWidthXl ? (
				<>
					<Styled.Copywrite>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</Styled.Copywrite>
					<Styled.Icon type='footer' />
				</>
			) : (
				<>
					{socialIcons.map((icon, index) => (
						<Styled.SocialLink
							key={index}
							href={icon.link}
							target='_blank'
							rel='noreferrer'>
							{icon.icon}
						</Styled.SocialLink>
					))}
				</>
			)}
		</Styled.Footer>
	)
}
