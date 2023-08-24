import { useWindowSize } from '../../../hooks/useWindowSize.jsx'
import { useLocation } from 'react-router-dom'
import * as styled from '../styles/Footer.styled.jsx'

export const Footer = () => {
	const { isWideScreen } = useWindowSize()
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	const socialIcons = [
		{
			icon: <styled.LinkedIn $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
		},
		{
			icon: <styled.GitHub $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://github.com/hawkjosh',
		},
		{
			icon: <styled.CodePen $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://codepen.io/hawkjosh',
		},
		{
			icon: <styled.StackOverflow $width={staticNav ? '1.75rem' : '2rem'} />,
			link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
		},
	]

	return (
		<styled.Footer $height={staticNav ? '3rem' : '4rem'}>
			{isWideScreen ? (
				<>
					<styled.Copywrite>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</styled.Copywrite>
					<styled.Logo type='footer' />
				</>
			) : (
				<>
					{socialIcons.map((icon, index) => (
						<styled.SocialLink
							key={index}
							href={icon.link}
							target='_blank'
							rel='noreferrer'>
							{icon.icon}
						</styled.SocialLink>
					))}
				</>
			)}
		</styled.Footer>
	)
}
