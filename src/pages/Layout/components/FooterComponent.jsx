import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavEffects } from '../../../hooks/useNavEffects.jsx'
import { LayoutIcon } from '../components/Layout.icons.jsx'
import * as remixIcon from '@styled-icons/remix-line'

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

export const FooterComponent = () => {
	const { fixed, min } = useNavEffects()

	return (
		<ComponentWrapper height={fixed ? '3rem' : '4rem'}>
			<Footer>
				<FooterContent display={min ? 'none' : 'flex'}>
					<Copywrite fontSize={fixed ? '1.375rem' : '1.5rem'}>
						© {new Date().getFullYear()} Joshua Wilde Hawk
					</Copywrite>
					<LogoIcon
						type='footer'
						width={fixed ? '2.25rem' : '2.625rem'}
					/>
				</FooterContent>
				<FooterContent display={min ? 'flex' : 'none'}>
					{icons.map((item, index) => (
						<SocialLink
							key={index}
							to={item.link}
							target='_blank'
							rel='noreferrer'>
							<SocialIcon
								icon={item.icon}
								width={fixed ? '1.75rem' : '2rem'}
							/>
						</SocialLink>
					))}
				</FooterContent>
			</Footer>
		</ComponentWrapper>
	)
}

// Styled-Components
const ComponentWrapper = styled.div`
	width: 100%;
	height: ${(props) => props.height};
	position: fixed;
	bottom: -0.0625rem;
	background: var(--color-secondary);
	border-top: solid hsla(360, 100%, 100%, 1);
`

const Footer = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	margin: auto;
`

const FooterContent = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.244rem + 4.695vw, 5rem);
`

const Copywrite = styled.div`
	font-size: ${(props) => props.fontSize};
	font-weight: 300;
`

const LogoIcon = styled(LayoutIcon)`
	display: flex;
	width: ${(props) => props.width};
	fill: hsla(360, 100%, 100%, 1);
	stroke: var(--color-primary);
	transition: transform 500ms ease-out;
	&:hover {
		transform: scale(1.0625);
		fill: var(--color-primary);
		stroke: hsla(360, 100%, 100%, 1);
		cursor: grab;
	}
`

const SocialLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
`

const SocialIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: ${(props) => props.width};
	color: hsla(360, 100%, 100%, 1);
	transition-property: color, transform;
	transition-duration: 500ms, 250ms;
	transition-timing-function: ease-in-out, ease;
	cursor: pointer;
	&:hover {
		color: var(--color-primary);
		transform: scale(1.25) translateY(-5%);
	}
`
