import { useEffect, useRef } from 'react'
import * as simpleIcon from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

const icons = [
	{
		name: 'Apollo',
		image: <simpleIcon.Apollographql />,
		icon: simpleIcon.Apollographql,
		top: '-25%',
		color: '#311C87',
		shadow: '#FFFFFF',
	},
	{
		name: 'Babel',
		image: <simpleIcon.Babel />,
		icon: simpleIcon.Babel,
		top: '-25%',
		color: '#F9DC3E',
		shadow: '#36354F',
	},
	{
		name: 'Bootstrap',
		image: <simpleIcon.Bootstrap />,
		icon: simpleIcon.Bootstrap,
		top: '-25%',
		color: '#7952B3',
		shadow: '#FFFFFF',
	},
	{
		name: 'CodePen',
		image: <simpleIcon.Codepen />,
		icon: simpleIcon.Codepen,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'CSS',
		image: <simpleIcon.Css3 />,
		icon: simpleIcon.Css3,
		top: '-25%',
		color: '#1572B6',
		shadow: '#FFFFFF',
	},
	{
		name: 'ESLint',
		image: <simpleIcon.Eslint />,
		icon: simpleIcon.Eslint,
		top: '-25%',
		color: '#4B32C3',
		shadow: '#FFFFFF',
	},
	{
		name: 'Flask',
		image: <simpleIcon.Flask />,
		icon: simpleIcon.Flask,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Git',
		image: <simpleIcon.Git />,
		icon: simpleIcon.Git,
		top: '-25%',
		color: '#F05032',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitHub',
		image: <simpleIcon.Github />,
		icon: simpleIcon.Github,
		top: '-25%',
		color: '#181717',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitLab',
		image: <simpleIcon.Gitlab />,
		icon: simpleIcon.Gitlab,
		top: '-25%',
		color: '#FC6D26',
		shadow: '#FFFFFF',
	},
	{
		name: 'GraphQL',
		image: <simpleIcon.Graphql />,
		icon: simpleIcon.Graphql,
		top: '-25%',
		color: '#E10098',
		shadow: '#FFFFFF',
	},
	{
		name: 'Handlebars',
		image: <simpleIcon.Handlebarsdotjs />,
		icon: simpleIcon.Handlebarsdotjs,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Heroku',
		image: <simpleIcon.Heroku />,
		icon: simpleIcon.Heroku,
		top: '-25%',
		color: '#430098',
		shadow: '#FFFFFF',
	},
	{
		name: 'HTML',
		image: <simpleIcon.Html5 />,
		icon: simpleIcon.Html5,
		top: '-25%',
		color: '#E34F26',
		shadow: '#FFFFFF',
	},
	{
		name: 'JavaScript',
		image: <simpleIcon.Javascript />,
		icon: simpleIcon.Javascript,
		top: '-25%',
		color: '#F7DF1E',
		shadow: '#36354F',
	},
	{
		name: 'Jest',
		image: <simpleIcon.Jest />,
		icon: simpleIcon.Jest,
		top: '-25%',
		color: '#C21325',
		shadow: '#FFFFFF',
	},
	{
		name: 'JQuery',
		image: <simpleIcon.Jquery />,
		icon: simpleIcon.Jquery,
		top: '-25%',
		color: '#0769AD',
		shadow: '#FFFFFF',
	},
	{
		name: 'JSON',
		image: <simpleIcon.Json />,
		icon: simpleIcon.Json,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'LinkedIn',
		image: <simpleIcon.Linkedin />,
		icon: simpleIcon.Linkedin,
		top: '-25%',
		color: '#0A66C2',
		shadow: '#FFFFFF',
	},
	{
		name: 'Material',
		image: <simpleIcon.Mui />,
		icon: simpleIcon.Mui,
		top: '-25%',
		color: '#007FFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'MongoDB',
		image: <simpleIcon.Mongodb />,
		icon: simpleIcon.Mongodb,
		top: '-25%',
		color: '#47A248',
		shadow: '#FFFFFF',
	},
	{
		name: 'MySQL',
		image: <simpleIcon.Mysql />,
		icon: simpleIcon.Mysql,
		top: '-25%',
		color: '#4479A1',
		shadow: '#FFFFFF',
	},
	{
		name: 'Netlify',
		image: <simpleIcon.Netlify />,
		icon: simpleIcon.Netlify,
		top: '-25%',
		color: '#00C7B7',
		shadow: '#FFFFFF',
	},
	{
		name: 'NextJS',
		image: <simpleIcon.Nextdotjs />,
		icon: simpleIcon.Nextdotjs,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'NodeJS',
		image: <simpleIcon.Nodedotjs />,
		icon: simpleIcon.Nodedotjs,
		top: '-25%',
		color: '#339933',
		shadow: '#FFFFFF',
	},
	{
		name: 'Nodemon',
		image: <simpleIcon.Nodemon />,
		icon: simpleIcon.Nodemon,
		top: '-25%',
		color: '#76D04B',
		shadow: '#FFFFFF',
	},
	{
		name: 'NPM',
		image: <simpleIcon.Npm />,
		icon: simpleIcon.Npm,
		top: '-25%',
		color: '#CB3837',
		shadow: '#FFFFFF',
	},
	{
		name: 'Python',
		image: <simpleIcon.Python />,
		icon: simpleIcon.Python,
		top: '-25%',
		color: '#3776AB',
		shadow: '#FFFFFF',
	},
	{
		name: 'ReactJS',
		image: <simpleIcon.ReactLogo />,
		icon: simpleIcon.ReactLogo,
		top: '-25%',
		color: '#61DAFB',
		shadow: '#36354F',
	},
	{
		name: 'Redux',
		image: <simpleIcon.Redux />,
		icon: simpleIcon.Redux,
		top: '-25%',
		color: '#764ABC',
		shadow: '#FFFFFF',
	},
	{
		name: 'Sequelize',
		image: <simpleIcon.Sequelize />,
		icon: simpleIcon.Sequelize,
		top: '-25%',
		color: '#52B0E7',
		shadow: '#FFFFFF',
	},
	{
		name: 'Slack',
		image: <simpleIcon.Slack />,
		icon: simpleIcon.Slack,
		top: '-25%',
		color: '#4A154B',
		shadow: '#FFFFFF',
	},
	{
		name: 'Stack Overflow',
		image: <simpleIcon.Stackoverflow />,
		icon: simpleIcon.Stackoverflow,
		top: '-25%',
		color: '#F58025',
		shadow: '#FFFFFF',
	},
	{
		name: 'Styled Components',
		image: <simpleIcon.Styledcomponents />,
		icon: simpleIcon.Styledcomponents,
		top: '-25%',
		color: '#DB7093',
		shadow: '#FFFFFF',
	},
	{
		name: 'SVG',
		image: <simpleIcon.Svg />,
		icon: simpleIcon.Svg,
		top: '-25%',
		color: '#FFB13B',
		shadow: '#36354F',
	},
	{
		name: 'Tailwind',
		image: <simpleIcon.Tailwindcss />,
		icon: simpleIcon.Tailwindcss,
		top: '-25%',
		color: '#06B6D4',
		shadow: '#FFFFFF',
	},
	{
		name: 'TypeScript',
		image: <simpleIcon.Typescript />,
		icon: simpleIcon.Typescript,
		top: '-25%',
		color: '#3178C6',
		shadow: '#FFFFFF',
	},
	{
		name: 'Vite',
		image: <simpleIcon.Vite />,
		icon: simpleIcon.Vite,
		top: '-25%',
		color: '#646CFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'VSCode',
		image: <simpleIcon.Visualstudiocode />,
		icon: simpleIcon.Visualstudiocode,
		top: '-25%',
		color: '#007ACC',
		shadow: '#FFFFFF',
	},
	{
		name: 'WebPack',
		image: <simpleIcon.Webpack />,
		icon: simpleIcon.Webpack,
		top: '-25%',
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
					<Styled.ToolboxIcon
						key={index}
						icon={icon.icon}
						color={icon.color}>
						<Styled.Tooltip
							$top={icon.top}
							$color={icon.color}
							$shadow={icon.shadow}>
							{icon.name}
						</Styled.Tooltip>
					</Styled.ToolboxIcon>
				))}
			</Styled.Wrapper>
			<Styled.CloseBtn onClick={closeToolbox} />
		</Styled.Modal>
	)
}
