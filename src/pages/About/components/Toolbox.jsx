import { useEffect, useRef } from 'react'
import * as simpleIcon from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

const icons = [
	{
		name: 'Apollo',
		icon: simpleIcon.Apollographql,
		color: '#311C87',
		shadow: '#FFFFFF',
	},
	{
		name: 'Babel',
		icon: simpleIcon.Babel,
		color: '#F9DC3E',
		shadow: '#36354F',
	},
	{
		name: 'Bootstrap',
		icon: simpleIcon.Bootstrap,
		color: '#7952B3',
		shadow: '#FFFFFF',
		top: '-25%',
	},
	{
		name: 'CodePen',
		icon: simpleIcon.Codepen,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'CSS',
		icon: simpleIcon.Css3,
		color: '#1572B6',
		shadow: '#FFFFFF',
	},
	{
		name: 'ESLint',
		icon: simpleIcon.Eslint,
		color: '#4B32C3',
		shadow: '#FFFFFF',
		top: '-30%',
	},
	{
		name: 'Flask',
		icon: simpleIcon.Flask,
		color: '#000000',
		shadow: '#FFFFFF',
		top: '-25%',
	},
	{
		name: 'Git',
		icon: simpleIcon.Git,
		color: '#F05032',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitHub',
		icon: simpleIcon.Github,
		color: '#181717',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitLab',
		icon: simpleIcon.Gitlab,
		color: '#FC6D26',
		shadow: '#FFFFFF',
	},
	{
		name: 'GraphQL',
		icon: simpleIcon.Graphql,
		color: '#E10098',
		shadow: '#FFFFFF',
	},
	{
		name: 'Handlebars',
		icon: simpleIcon.Handlebarsdotjs,
		color: '#000000',
		shadow: '#FFFFFF',
		top: '-15%',
	},
	{
		name: 'Heroku',
		icon: simpleIcon.Heroku,
		color: '#430098',
		shadow: '#FFFFFF',
	},
	{
		name: 'HTML',
		icon: simpleIcon.Html5,
		color: '#E34F26',
		shadow: '#FFFFFF',
	},
	{
		name: 'JavaScript',
		icon: simpleIcon.Javascript,
		color: '#F7DF1E',
		shadow: '#36354F',
		top: '-40%',
	},
	{
		name: 'Jest',
		icon: simpleIcon.Jest,
		color: '#C21325',
		shadow: '#FFFFFF',
		top: '-40%',
	},
	{
		name: 'JQuery',
		icon: simpleIcon.Jquery,
		color: '#0769AD',
		shadow: '#FFFFFF',
	},
	{
		name: 'JSON',
		icon: simpleIcon.Json,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'LinkedIn',
		icon: simpleIcon.Linkedin,
		color: '#0A66C2',
		shadow: '#FFFFFF',
	},
	{
		name: 'Material',
		icon: simpleIcon.Mui,
		color: '#007FFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'MongoDB',
		icon: simpleIcon.Mongodb,
		color: '#47A248',
		shadow: '#FFFFFF',
	},
	{
		name: 'MySQL',
		icon: simpleIcon.Mysql,
		color: '#4479A1',
		shadow: '#FFFFFF',
		top: '-20%',
	},
	{
		name: 'Netlify',
		icon: simpleIcon.Netlify,
		color: '#00C7B7',
		shadow: '#FFFFFF',
	},
	{
		name: 'NextJS',
		icon: simpleIcon.Nextdotjs,
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'NodeJS',
		icon: simpleIcon.Nodedotjs,
		color: '#339933',
		shadow: '#FFFFFF',
	},
	{
		name: 'Nodemon',
		icon: simpleIcon.Nodemon,
		color: '#76D04B',
		shadow: '#FFFFFF',
	},
	{
		name: 'NPM',
		icon: simpleIcon.Npm,
		color: '#CB3837',
		shadow: '#FFFFFF',
	},
	{
		name: 'Python',
		icon: simpleIcon.Python,
		color: '#3776AB',
		shadow: '#FFFFFF',
	},
	{
		name: 'ReactJS',
		icon: simpleIcon.ReactLogo,
		color: '#61DAFB',
		shadow: '#36354F',
	},
	{
		name: 'Redux',
		icon: simpleIcon.Redux,
		color: '#764ABC',
		shadow: '#FFFFFF',
	},
	{
		name: 'Sequelize',
		icon: simpleIcon.Sequelize,
		color: '#52B0E7',
		shadow: '#FFFFFF',
	},
	{
		name: 'Slack',
		icon: simpleIcon.Slack,
		color: '#4A154B',
		shadow: '#FFFFFF',
	},
	{
		name: 'Stack Overflow',
		icon: simpleIcon.Stackoverflow,
		color: '#F58025',
		shadow: '#FFFFFF',
		top: '-55%',
	},
	{
		name: 'Styled Components',
		icon: simpleIcon.Styledcomponents,
		color: '#DB7093',
		shadow: '#FFFFFF',
		top: '-25%',
	},
	{
		name: 'SVG',
		icon: simpleIcon.Svg,
		color: '#FFB13B',
		shadow: '#36354F',
	},
	{
		name: 'Tailwind',
		icon: simpleIcon.Tailwindcss,
		color: '#06B6D4',
		shadow: '#FFFFFF',
		top: '-20%',
	},
	{
		name: 'TypeScript',
		icon: simpleIcon.Typescript,
		color: '#3178C6',
		shadow: '#FFFFFF',
		top: '-40%',
	},
	{
		name: 'Vite',
		icon: simpleIcon.Vite,
		color: '#646CFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'VSCode',
		icon: simpleIcon.Visualstudiocode,
		color: '#007ACC',
		shadow: '#FFFFFF',
	},
	{
		name: 'WebPack',
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
		<Styled.Modal
			ref={ref}
			onCancel={closeToolbox}>
			<Styled.Wrapper>
				{icons.map((icon, index) => (
					<Styled.ToolboxIconWrapper key={index}>
						<Styled.ToolboxIcon
							// key={index}
							icon={icon.icon}
							color={icon.color}></Styled.ToolboxIcon>
						<Styled.Tooltip
							$top={icon.top}
							$color={icon.color}
							$shadow={icon.shadow}>
							{icon.name}
						</Styled.Tooltip>
					</Styled.ToolboxIconWrapper>
				))}
			</Styled.Wrapper>
			<Styled.CloseBtn onClick={closeToolbox} />
		</Styled.Modal>
	)
}
