import { useNavMin } from '../../../hooks/useNavMin.jsx'
import { useStaticNav } from '../../../hooks/useStaticNav.jsx'
import * as remixIcon from '@styled-icons/remix-line'
import * as Styled from '../styles/Footer.styled.jsx'

const icons = [
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

export const Footer = () => {
	const navMin = useNavMin()
	const staticNav = useStaticNav()

	return (
		<Styled.Container $static={staticNav ? 'static' : ''}>
			{navMin ? (
				<Styled.Footer>
					{icons.map((item, index) => (
						<Styled.SocialLink
							key={index}
							href={item.link}
							target='_blank'
							rel='noreferrer'>
							<Styled.SocialIcon
								icon={item.icon}
								$static={staticNav ? 'static' : ''}
							/>
						</Styled.SocialLink>
					))}
				</Styled.Footer>
			) : (
				<Styled.Footer>
					<Styled.Copywrite>© {new Date().getFullYear()} Joshua Wilde Hawk</Styled.Copywrite>
					<Styled.LogoIcon type='footer' />
				</Styled.Footer>
			)}
		</Styled.Container>
	)
}

// Styled-Components
