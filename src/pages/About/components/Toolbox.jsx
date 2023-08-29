import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { breakpoints, screen } from '../../../GlobalStyle.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as simpleIcon from '@styled-icons/simple-icons'

const icons = [
	{
		title: 'Apollo',
		icon: simpleIcon.Apollographql,
		color: '#311C87',
		shadow: '#FFFFFF',
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
		shadow: '#FFFFFF',
		top: '-25%',
	},
	{
		title: 'CodePen',
		icon: simpleIcon.Codepen,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		title: 'CSS',
		icon: simpleIcon.Css3,
		color: '#1572B6',
		shadow: '#FFFFFF',
	},
	{
		title: 'ESLint',
		icon: simpleIcon.Eslint,
		color: '#4B32C3',
		shadow: '#FFFFFF',
		top: '-30%',
	},
	{
		title: 'Flask',
		icon: simpleIcon.Flask,
		color: '#000000',
		shadow: '#FFFFFF',
		top: '-25%',
	},
	{
		title: 'Git',
		icon: simpleIcon.Git,
		color: '#F05032',
		shadow: '#FFFFFF',
	},
	{
		title: 'GitHub',
		icon: simpleIcon.Github,
		color: '#181717',
		shadow: '#FFFFFF',
	},
	{
		title: 'GitLab',
		icon: simpleIcon.Gitlab,
		color: '#FC6D26',
		shadow: '#FFFFFF',
	},
	{
		title: 'GraphQL',
		icon: simpleIcon.Graphql,
		color: '#E10098',
		shadow: '#FFFFFF',
	},
	{
		title: 'Handlebars',
		icon: simpleIcon.Handlebarsdotjs,
		color: '#000000',
		shadow: '#FFFFFF',
		top: '-15%',
	},
	{
		title: 'Heroku',
		icon: simpleIcon.Heroku,
		color: '#430098',
		shadow: '#FFFFFF',
	},
	{
		title: 'HTML',
		icon: simpleIcon.Html5,
		color: '#E34F26',
		shadow: '#FFFFFF',
	},
	{
		title: 'JavaScript',
		icon: simpleIcon.Javascript,
		color: '#F7DF1E',
		shadow: '#36354F',
		top: '-40%',
	},
	{
		title: 'Jest',
		icon: simpleIcon.Jest,
		color: '#C21325',
		shadow: '#FFFFFF',
		top: '-40%',
	},
	{
		title: 'JQuery',
		icon: simpleIcon.Jquery,
		color: '#0769AD',
		shadow: '#FFFFFF',
	},
	{
		title: 'JSON',
		icon: simpleIcon.Json,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		title: 'LinkedIn',
		icon: simpleIcon.Linkedin,
		color: '#0A66C2',
		shadow: '#FFFFFF',
	},
	{
		title: 'Material',
		icon: simpleIcon.Mui,
		color: '#007FFF',
		shadow: '#FFFFFF',
	},
	{
		title: 'MongoDB',
		icon: simpleIcon.Mongodb,
		color: '#47A248',
		shadow: '#FFFFFF',
	},
	{
		title: 'MySQL',
		icon: simpleIcon.Mysql,
		color: '#4479A1',
		shadow: '#FFFFFF',
		top: '-20%',
	},
	{
		title: 'Netlify',
		icon: simpleIcon.Netlify,
		color: '#00C7B7',
		shadow: '#FFFFFF',
	},
	{
		title: 'NextJS',
		icon: simpleIcon.Nextdotjs,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		title: 'NodeJS',
		icon: simpleIcon.Nodedotjs,
		color: '#339933',
		shadow: '#FFFFFF',
	},
	{
		title: 'Nodemon',
		icon: simpleIcon.Nodemon,
		color: '#76D04B',
		shadow: '#FFFFFF',
	},
	{
		title: 'NPM',
		icon: simpleIcon.Npm,
		color: '#CB3837',
		shadow: '#FFFFFF',
	},
	{
		title: 'Python',
		icon: simpleIcon.Python,
		color: '#3776AB',
		shadow: '#FFFFFF',
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
		shadow: '#FFFFFF',
	},
	{
		title: 'Sequelize',
		icon: simpleIcon.Sequelize,
		color: '#52B0E7',
		shadow: '#FFFFFF',
	},
	{
		title: 'Slack',
		icon: simpleIcon.Slack,
		color: '#4A154B',
		shadow: '#FFFFFF',
	},
	{
		title: 'Stack Overflow',
		icon: simpleIcon.Stackoverflow,
		color: '#F58025',
		shadow: '#FFFFFF',
		top: '-55%',
	},
	{
		title: 'Styled Components',
		icon: simpleIcon.Styledcomponents,
		color: '#DB7093',
		shadow: '#FFFFFF',
		top: '-25%',
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
		shadow: '#FFFFFF',
		top: '-20%',
	},
	{
		title: 'TypeScript',
		icon: simpleIcon.Typescript,
		color: '#3178C6',
		shadow: '#FFFFFF',
		top: '-40%',
	},
	{
		title: 'Vite',
		icon: simpleIcon.Vite,
		color: '#646CFF',
		shadow: '#FFFFFF',
	},
	{
		title: 'VSCode',
		icon: simpleIcon.Visualstudiocode,
		color: '#007ACC',
		shadow: '#FFFFFF',
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
	max-width: 80rem;
	max-height: 95%;
	margin: auto;
	border: none;
	border-radius: 2rem;
	outline: none;
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
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${screen.xl} {
		width: 75%;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${screen.maxLg} { */
	@media ${screen.lg} {
		width: 80%;
		@media ${screen.landscape} {
			width: 85%;
		}
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${screen.maxMd} { */
	@media ${screen.md} {
		width: 85%;
		@media ${screen.landscape} {
			width: 90%;
			max-height: calc(100dvh - 3rem);
		}
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${screen.maxSm} { */
	@media ${screen.sm} {
		width: 90%;
		@media ${screen.landscape} {
			width: 85%;
			height: calc(100dvh - 3rem);
			top: 1rem;
		}
	}
	@media ${screen.xs} {
		width: 90%;
		@media ${screen.landscape} {
			width: 85%;
			height: calc(100dvh - 3rem);
			top: 1rem;
		}
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
	row-gap: clamp(2.25rem, 1.722rem + 2.222vw, 3.5rem);
	column-gap: clamp(1.5rem, 0.867rem + 2.667vw, 3rem);
	margin: 2.5rem 5%;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${screen.xl} {
		grid-template-columns: repeat(8, 1fr);
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${screen.maxLg} { */
	@media ${screen.lg} {
		grid-template-columns: repeat(5, 1fr);
		@media ${screen.landscape} {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${screen.maxMd} { */
	@media ${screen.md} {
		grid-template-columns: repeat(5, 1fr);
		@media ${screen.landscape} {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${screen.maxSm} { */
	@media ${screen.sm} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${screen.xs} {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Tooltip = styled.div`
	visibility: hidden;
	position: absolute;
	width: min-content;
	color: ${({ $color }) => $color};
	text-shadow: ${({ $shadow }) =>
		`0.09375rem 0 ${$shadow}, 0 0.09375rem  ${$shadow}`};
	text-align: center;
	line-height: 0.9;
	font-size: clamp(0.75rem, 0.624rem + 0.469vw, 1rem);
	font-weight: 900;
	top: ${({ $top }) => $top || '-35%'};
	left: 50%;
	transform: translateX(-50%);
`

const IconWrapper = styled.div`
	position: relative;
	height: 100%;
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
