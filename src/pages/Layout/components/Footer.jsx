import { useWindowProps } from '../../../hooks/useWindowProps.jsx'
import { useLocation } from 'react-router-dom'
import * as remixIcon from '@styled-icons/remix-line'
import * as Styled from '../styles/Footer.styled.jsx'

export const Footer = () => {
	const { isWidthLg, isWidthXl } = useWindowProps()
	const location = useLocation()
	const staticNav = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	const socialIcons = [
		{
			icon: remixIcon.Linkedin,
			link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
		},
		{
			icon: remixIcon.Github,
			link: 'https://github.com/hawkjosh',
		},
		{
			icon: remixIcon.Codepen,
			link: 'https://codepen.io/hawkjosh',
		},
		{
			icon: remixIcon.StackOverflow,
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
					<Styled.LogoIcon type='footer' />
				</>
			) : (
				<>
					{socialIcons.map((icon, index) => (
						<Styled.SocialLink
							key={index}
							href={icon.link}
							target='_blank'
							rel='noreferrer'>
							<Styled.SocialIcon
								icon={icon.icon}
								$width={staticNav ? '1.75rem' : '2rem'}
							/>
						</Styled.SocialLink>
					))}
				</>
			)}
		</Styled.Footer>
	)
}
