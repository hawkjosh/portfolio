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
		image: (
			<simpleIcons.Apollographql
				color='#311C87'
				size='100%'
			/>
		),
	},
	{
		name: 'Babel',
		image: (
			<simpleIcons.Babel
				color='#F9DC3E'
				size='100%'
			/>
		),
	},
	{
		name: 'Bootstrap',
		image: (
			<simpleIcons.Bootstrap
				color='#7952B3'
				size='100%'
			/>
		),
	},
	{
		name: 'CodePen',
		image: (
			<simpleIcons.Codepen
				color='#000000'
				size='100%'
			/>
		),
	},
	{
		name: 'CSS',
		image: (
			<simpleIcons.Css3
				color='#1572B6'
				size='100%'
			/>
		),
	},
	{
		name: 'ESLint',
		image: (
			<simpleIcons.Eslint
				color='#4B32C3'
				size='100%'
			/>
		),
	},
	{
		name: 'Git',
		image: (
			<simpleIcons.Git
				color='#F05032'
				size='100%'
			/>
		),
	},
	{
		name: 'GitHub',
		image: (
			<simpleIcons.Github
				color='#181717'
				size='100%'
			/>
		),
	},
	{
		name: 'GitLab',
		image: (
			<simpleIcons.Git
				color='#FC6D26'
				size='100%'
			/>
		),
	},
	{
		name: 'GraphQL',
		image: (
			<simpleIcons.Graphql
				color='#E10098'
				size='100%'
			/>
		),
	},
	{
		name: 'Handlebars',
		image: (
			<simpleIcons.Handlebarsdotjs
				color='#000000'
				size='100%'
			/>
		),
	},
	{
		name: 'Heroku',
		image: (
			<simpleIcons.Heroku
				color='#430098'
				size='100%'
			/>
		),
	},
	{
		name: 'HTML',
		image: (
			<simpleIcons.Html5
				color='#E34F26'
				size='100%'
			/>
		),
	},
	{
		name: 'JavaScript',
		image: (
			<simpleIcons.Javascript
				color='#F7DF1E'
				size='100%'
			/>
		),
	},
	{
		name: 'Jest',
		image: (
			<simpleIcons.Jest
				color='#C21325'
				size='100%'
			/>
		),
	},
	{
		name: 'JQuery',
		image: (
			<simpleIcons.Jquery
				color='#0769AD'
				size='100%'
			/>
		),
	},
	{
		name: 'JSON',
		image: (
			<simpleIcons.Json
				color='#000000'
				size='100%'
			/>
		),
	},
	{
		name: 'LinkedIn',
		image: (
			<simpleIcons.Linkedin
				color='#0A66C2'
				size='100%'
			/>
		),
	},
	{
		name: 'Material',
		image: (
			<simpleIcons.Mui
				color='#007FFF'
				size='100%'
			/>
		),
	},
	{
		name: 'MongoDB',
		image: (
			<simpleIcons.Mongodb
				color='#47A248'
				size='100%'
			/>
		),
	},
	{
		name: 'MySQL',
		image: (
			<simpleIcons.Mysql
				color='#4479A1'
				size='100%'
			/>
		),
	},
	{
		name: 'Netlify',
		image: (
			<simpleIcons.Netlify
				color='#00C7B7'
				size='100%'
			/>
		),
	},
	{
		name: 'NodeJS',
		image: (
			<simpleIcons.Nodedotjs
				color='#339933'
				size='100%'
			/>
		),
	},
	{
		name: 'Nodemon',
		image: (
			<simpleIcons.Nodemon
				color='#76D04B'
				size='100%'
			/>
		),
	},
	{
		name: 'NPM',
		image: (
			<simpleIcons.Npm
				color='#CB3837'
				size='100%'
			/>
		),
	},
	{
		name: 'Python',
		image: (
			<simpleIcons.Python
				color='#3776AB'
				size='100%'
			/>
		),
	},
	{
		name: 'ReactJS',
		image: (
			<simpleIcons.ReactLogo
				color='#61DAFB'
				size='100%'
			/>
		),
	},
	{
		name: 'Redux',
		image: (
			<simpleIcons.Redux
				color='#764ABC'
				size='100%'
			/>
		),
	},
	{
		name: 'Sequelize',
		image: (
			<simpleIcons.Sequelize
				color='#52B0E7'
				size='100%'
			/>
		),
	},
	{
		name: 'Slack',
		image: (
			<simpleIcons.Slack
				color='#4A154B'
				size='100%'
			/>
		),
	},
	{
		name: 'Stack Overflow',
		image: (
			<simpleIcons.Stackoverflow
				color='#F58025'
				size='100%'
			/>
		),
	},
	{
		name: 'Styled-Components',
		image: (
			<simpleIcons.Styledcomponents
				color='#DB7093'
				size='100%'
			/>
		),
	},
	{
		name: 'SVG',
		image: (
			<simpleIcons.Svg
				color='#FFB13B'
				size='100%'
			/>
		),
	},
	{
		name: 'Tailwind',
		image: (
			<simpleIcons.Tailwindcss
				color='#06B6D4'
				size='100%'
			/>
		),
	},
	{
		name: 'Vite',
		image: (
			<simpleIcons.Vite
				color='#646CFF'
				size='100%'
			/>
		),
	},
	{
		name: 'VSCode',
		image: (
			<simpleIcons.Visualstudiocode
				color='#007ACC'
				size='100%'
			/>
		),
	},
	{
		name: 'WebPack',
		image: (
			<simpleIcons.Webpack
				color='#8DD6F9'
				size='100%'
			/>
		),
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
							<Tooltip>{icon.name}</Tooltip>
							{icon.image}
						</ToolboxIcon>
					))}
				</ToolboxIconsWrapper>
			</ToolboxContainer>
		</ToolboxBackground>
	)
}
