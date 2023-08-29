import { useEffect, useRef } from 'react'
import * as simpleIcon from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

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
		<Styled.Modal
			ref={ref}
			onCancel={closeToolbox}>
			<Styled.Container>
				{icons.map((item, index) => (
					<Styled.IconWrapper key={index}>
						<Styled.Icon
							icon={item.icon}
							color={item.color}
						/>
						<Styled.Tooltip
							$top={item.top}
							$color={item.color}
							$shadow={item.shadow}>
							{item.title}
						</Styled.Tooltip>
					</Styled.IconWrapper>
				))}
			</Styled.Container>
			<Styled.CloseBtn onClick={closeToolbox} />
		</Styled.Modal>
	)
}
