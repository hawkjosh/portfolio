import { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { screen } from '../../../GlobalStyle.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as simpleIcon from '@styled-icons/simple-icons'

const icons = [
	{
		title: 'Apollo',
		icon: simpleIcon.Apollographql,
		color: '#311C87',
	},
	{
		title: 'Babel',
		icon: simpleIcon.Babel,
		color: '#F9DC3E',
		shadow: '#36354F',
	},
	{
		title: 'Bootstrap',
		icon: simpleIcon.Bootstrap,
		color: '#7952B3',
		top: '-1.375rem',
	},
	{
		title: 'CodePen',
		icon: simpleIcon.Codepen,
		color: '#000000',
	},
	{
		title: 'CSS',
		icon: simpleIcon.Css3,
		color: '#1572B6',
	},
	{
		title: 'ESLint',
		icon: simpleIcon.Eslint,
		color: '#4B32C3',
		top: '-1.4375rem',
	},
	{
		title: 'Flask',
		icon: simpleIcon.Flask,
		color: '#000000',
		top: '-1.4375rem',
	},
	{
		title: 'Git',
		icon: simpleIcon.Git,
		color: '#F05032',
	},
	{
		title: 'GitHub',
		icon: simpleIcon.Github,
		color: '#181717',
	},
	{
		title: 'GitLab',
		icon: simpleIcon.Gitlab,
		color: '#FC6D26',
	},
	{
		title: 'GraphQL',
		icon: simpleIcon.Graphql,
		color: '#E10098',
	},
	{
		title: 'Handlebars',
		icon: simpleIcon.Handlebarsdotjs,
		color: '#000000',
		top: '-1rem',
	},
	{
		title: 'Heroku',
		icon: simpleIcon.Heroku,
		color: '#430098',
	},
	{
		title: 'HTML',
		icon: simpleIcon.Html5,
		color: '#E34F26',
	},
	{
		title: 'JavaScript',
		icon: simpleIcon.Javascript,
		color: '#F7DF1E',
		shadow: '#36354F',
	},
	{
		title: 'Jest',
		icon: simpleIcon.Jest,
		color: '#C21325',
	},
	{
		title: 'JQuery',
		icon: simpleIcon.Jquery,
		color: '#0769AD',
	},
	{
		title: 'JSON',
		icon: simpleIcon.Json,
		color: '#000000',
	},
	{
		title: 'LinkedIn',
		icon: simpleIcon.Linkedin,
		color: '#0A66C2',
	},
	{
		title: 'Material',
		icon: simpleIcon.Mui,
		color: '#007FFF',
		top: '-1.375rem',
	},
	{
		title: 'MongoDB',
		icon: simpleIcon.Mongodb,
		color: '#47A248',
	},
	{
		title: 'MySQL',
		icon: simpleIcon.Mysql,
		color: '#4479A1',
		top: '-1rem',
	},
	{
		title: 'Netlify',
		icon: simpleIcon.Netlify,
		color: '#00C7B7',
	},
	{
		title: 'NextJS',
		icon: simpleIcon.Nextdotjs,
		color: '#000000',
	},
	{
		title: 'NodeJS',
		icon: simpleIcon.Nodedotjs,
		color: '#339933',
	},
	{
		title: 'Nodemon',
		icon: simpleIcon.Nodemon,
		color: '#76D04B',
	},
	{
		title: 'NPM',
		icon: simpleIcon.Npm,
		color: '#CB3837',
	},
	{
		title: 'Python',
		icon: simpleIcon.Python,
		color: '#3776AB',
	},
	{
		title: 'ReactJS',
		icon: simpleIcon.ReactLogo,
		color: '#61DAFB',
		shadow: '#36354F',
	},
	{
		title: 'Redux',
		icon: simpleIcon.Redux,
		color: '#764ABC',
	},
	{
		title: 'Sequelize',
		icon: simpleIcon.Sequelize,
		color: '#52B0E7',
	},
	{
		title: 'Slack',
		icon: simpleIcon.Slack,
		color: '#4A154B',
	},
	{
		title: 'Stack Overflow',
		icon: simpleIcon.Stackoverflow,
		color: '#F58025',
		top: '-2.375rem',
	},
	{
		title: 'Styled Components',
		icon: simpleIcon.Styledcomponents,
		color: '#DB7093',
		top: '-1.375rem',
	},
	{
		title: 'SVG',
		icon: simpleIcon.Svg,
		color: '#FFB13B',
		shadow: '#36354F',
	},
	{
		title: 'Tailwind',
		icon: simpleIcon.Tailwindcss,
		color: '#06B6D4',
		top: '-1rem',
	},
	{
		title: 'TypeScript',
		icon: simpleIcon.Typescript,
		color: '#3178C6',
	},
	{
		title: 'Vite',
		icon: simpleIcon.Vite,
		color: '#646CFF',
	},
	{
		title: 'VSCode',
		icon: simpleIcon.Visualstudiocode,
		color: '#007ACC',
	},
	{
		title: 'WebPack',
		icon: simpleIcon.Webpack,
		color: '#8DD6F9',
		shadow: '#36354F',
	},
]

export const Toolbox = ({ openToolbox, closeToolbox }) => {
	const ref = useRef()

	useEffect(() => {
		if (openToolbox) {
			ref.current.showModal()
			ref.current.scrollTop = 0
		} else {
			ref.current.close()
		}
	}, [openToolbox])

	return (
		<Modal
			ref={ref}
			onCancel={closeToolbox}>
			<ToolboxContainer>
				{icons.map((item, index) => (
					<IconWrapper key={index}>
						<Icon
							icon={item.icon}
							color={item.color}
						/>
						<Tooltip
							$top={item.top}
							$color={item.color}
							$shadow={item.shadow}>
							{item.title}
						</Tooltip>
					</IconWrapper>
				))}
			</ToolboxContainer>
			<CloseBtn onClick={closeToolbox} />
		</Modal>
	)
}

// Styled-Components
const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const tooltipHover = keyframes`
	from {
		scale: 0;
		opacity: 0;
	}
	to {
		scale: 1;
		opacity: 1;
	}
`

const Modal = styled.dialog`
	width: 90%;
	max-width: 70rem;
	height: max-content;
	max-height: calc(100dvh - 3rem);
	margin: auto;
	outline: none;
	border: none;
	border-radius: 2rem;
	background: hsla(20, 14%, 96%, 0.75);
	box-shadow: 0.75rem 0.75rem 0.375rem 0 hsla(0, 0%, 0%, 0.75);
	padding: 0.75rem 1.25rem 0.5rem;
	overflow-y: auto;
	scrollbar-width: none;
	animation: ${fadeIn} 1000ms ease both;
	&::backdrop {
		animation: ${fadeIn} 1000ms ease both;
		background: hsla(0, 0%, 0%, 0.625);
	}
`

const CloseBtn = styled(faIcon.CircleXmark)`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	width: 5%;
	min-width: 1.5rem;
	max-width: 2rem;
	color: var(--color-secondary);
	filter: contrast(50%);
	cursor: pointer;
	transition-property: filter, transform;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		filter: contrast(100%);
		transform: scale(1.125);
	}
`

const ToolboxContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	row-gap: 2.75rem;
	margin: 2.5rem 2.5% 1rem;
	@media ${screen.xs} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${screen.minMd} {
		grid-template-columns: repeat(8, 1fr);
	}
`

const Tooltip = styled.div`
	visibility: hidden;
	position: absolute;
	width: min-content;
	color: ${({ $color }) => $color};
	text-shadow: ${({ $shadow }) =>
		$shadow
			? `0.09375rem 0 ${$shadow}, 0 0.09375rem ${$shadow}`
			: '0.09375rem 0 hsla(0, 0%, 100%, 1), 0 0.09375rem hsla(0, 0%, 100%, 1)'};
	text-align: center;
	line-height: 0.9;
	font-size: clamp(0.875rem, 0.844rem + 0.117vw, 0.938rem);
	font-weight: 700;
	top: ${({ $top }) => $top || '-1.5rem'};
	left: 50%;
	transform: translateX(-50%);
`

const IconWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover > ${Tooltip} {
		animation: ${tooltipHover} 500ms ease-in-out;
		visibility: visible;
	}
`

const Icon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	width: 100%;
	max-width: clamp(2.5rem, 1.244rem + 4.695vw, 5rem);
	display: flex;
	justify-content: center;
	align-items: center;
	filter: contrast(10%);
	cursor: grab;
	transition-property: filter, transform;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		filter: contrast(100%);
		transform: scale(1.125);
	}
`
