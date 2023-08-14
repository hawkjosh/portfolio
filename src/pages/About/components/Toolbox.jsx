import React from 'react'

import * as simpleIcons from '@styled-icons/simple-icons'

import {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	ToolboxIconsWrapper,
	Tooltip,
	ToolboxIcon,
} from './styles/Toolbox.styled.js'

const icons = [
	{
		name: 'Apollo',
		image: <simpleIcons.Apollographql color='#311C87' />,
		color: '#311C87',
	},
	{
		name: 'Babel',
		image: <simpleIcons.Babel color='#F9DC3E' />,
		color: '#F9DC3E',
	},
	{
		name: 'Bootstrap',
		image: <simpleIcons.Bootstrap color='#7952B3' />,
		color: '#7952B3',
		transform: 'translateY(-90%)',
	},
	{
		name: 'CodePen',
		image: <simpleIcons.Codepen color='#000000' />,
		color: '#000000',
	},
	{
		name: 'CSS',
		image: <simpleIcons.Css3 color='#1572B6' />,
		color: '#1572B6',
	},
	{
		name: 'ESLint',
		image: <simpleIcons.Eslint color='#4B32C3' />,
		color: '#4B32C3',
		transform: 'translateY(-100%)',
	},
	{
		name: 'Git',
		image: <simpleIcons.Git color='#F05032' />,
		color: '#F05032',
	},
	{
		name: 'Flask',
		image: <simpleIcons.Flask color='#000000' />,
		color: '#000000',
		transform: 'translateY(-100%)',
	},
	{
		name: 'GitHub',
		image: <simpleIcons.Github color='#181717' />,
		color: '#181717',
		transform: 'translateY(-110%)',
	},
	{
		name: 'GitLab',
		image: <simpleIcons.Git color='#FC6D26' />,
		color: '#FC6D26',
	},
	{
		name: 'GraphQL',
		image: <simpleIcons.Graphql color='#E10098' />,
		color: '#E10098',
	},
	{
		name: 'Handlebars',
		image: <simpleIcons.Handlebarsdotjs color='#000000' />,
		color: '#000000',
		transform: 'translateY(-50%)',
	},
	{
		name: 'Heroku',
		image: <simpleIcons.Heroku color='#430098' />,
		color: '#430098',
	},
	{
		name: 'HTML',
		image: <simpleIcons.Html5 color='#E34F26' />,
		color: '#E34F26',
	},
	{
		name: 'JavaScript',
		image: <simpleIcons.Javascript color='#F7DF1E' />,
		color: '#F7DF1E',
	},
	{
		name: 'Jest',
		image: <simpleIcons.Jest color='#C21325' />,
		color: '#C21325',
	},
	{
		name: 'JQuery',
		image: <simpleIcons.Jquery color='#0769AD' />,
		color: '#0769AD',
	},
	{
		name: 'JSON',
		image: <simpleIcons.Json color='#000000' />,
		color: '#000000',
		transform: 'translateY(-120%)',
	},
	{
		name: 'LinkedIn',
		image: <simpleIcons.Linkedin color='#0A66C2' />,
		color: '#0A66C2',
	},
	{
		name: 'Material',
		image: <simpleIcons.Mui color='#007FFF' />,
		color: '#007FFF',
		transform: 'translateY(-100%)',
	},
	{
		name: 'MongoDB',
		image: <simpleIcons.Mongodb color='#47A248' />,
		color: '#47A248',
	},
	{
		name: 'MySQL',
		image: <simpleIcons.Mysql color='#4479A1' />,
		color: '#4479A1',
		transform: 'translateY(-75%)',
	},
	{
		name: 'Netlify',
		image: <simpleIcons.Netlify color='#00C7B7' />,
		color: '#00C7B7',
	},
	{
		name: 'NodeJS',
		image: <simpleIcons.Nodedotjs color='#339933' />,
		color: '#339933',
	},
	{
		name: 'NextJS',
		image: <simpleIcons.Nextdotjs color='#000000' />,
		color: '#000000',
	},
	{
		name: 'Nodemon',
		image: <simpleIcons.Nodemon color='#76D04B' />,
		color: '#76D04B',
	},
	{
		name: 'NPM',
		image: <simpleIcons.Npm color='#CB3837' />,
		color: '#CB3837',
	},
	{
		name: 'Python',
		image: <simpleIcons.Python color='#3776AB' />,
		color: '#3776AB',
	},
	{
		name: 'ReactJS',
		image: <simpleIcons.ReactLogo color='#61DAFB' />,
		color: '#61DAFB',
		transform: 'translateY(-110%)',
	},
	{
		name: 'Redux',
		image: <simpleIcons.Redux color='#764ABC' />,
		color: '#764ABC',
		transform: 'translateY(-110%)',
	},
	{
		name: 'Sequelize',
		image: <simpleIcons.Sequelize color='#52B0E7' />,
		color: '#52B0E7',
	},
	{
		name: 'Slack',
		image: <simpleIcons.Slack color='#4A154B' />,
		color: '#4A154B',
	},
	{
		name: 'Stack Overflow',
		image: <simpleIcons.Stackoverflow color='#F58025' size='90%' />,
		color: '#F58025',
		transform: 'translateY(-105%)',
	},
	{
		name: 'Styled Components',
		image: <simpleIcons.Styledcomponents color='#DB7093' />,
		color: '#DB7093',
		transform: 'translateY(-75%)',
	},
	{
		name: 'SVG',
		image: <simpleIcons.Svg color='#FFB13B' />,
		color: '#FFB13B',
	},
	{
		name: 'Tailwind',
		image: <simpleIcons.Tailwindcss color='#06B6D4' />,
		color: '#06B6D4',
		transform: 'translateY(-75%)',
	},
	{
		name: 'TypeScript',
		image: <simpleIcons.Typescript color='#3178C6' />,
		color: '#3178C6',
	},
	{
		name: 'Vite',
		image: <simpleIcons.Vite color='#646CFF' />,
		color: '#646CFF',
	},
	{
		name: 'VSCode',
		image: <simpleIcons.Visualstudiocode color='#007ACC' />,
		color: '#007ACC',
	},
	{
		name: 'WebPack',
		image: <simpleIcons.Webpack color='#8DD6F9' />,
		color: '#8DD6F9',
	},
]

export const Toolbox = ({ setShowToolbox }) => {
	return (
		<ToolboxBackground>
			<ToolboxContainer>
				<ToolboxCloseBtnWrapper>
					<ToolboxCloseBtn
						onClick={() => {
							setShowToolbox(false)
						}}
					/>
				</ToolboxCloseBtnWrapper>
				<ToolboxIconsWrapper>
					{icons.map((icon, index) => (
						<ToolboxIcon key={index}>
							<Tooltip
								$color={icon.color}
								$transform={icon.transform}>
								{icon.name}
							</Tooltip>
							{icon.image}
						</ToolboxIcon>
					))}
				</ToolboxIconsWrapper>
			</ToolboxContainer>
		</ToolboxBackground>
	)
}
