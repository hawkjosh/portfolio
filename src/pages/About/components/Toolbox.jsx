import React from 'react'

import * as simpleIcons from '@styled-icons/simple-icons'

import {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	// ToolboxIconsWrapper,
	ToolboxSimpleIconsWrapper,
	ToolboxIcon,
	ToolboxSimpleIcon,
} from './styles/Toolbox.styled.js'

// import Apollo from '../images/apollo.svg'
// import Babel from '../images/babel.svg'
// import Bootstrap from '../images/bootstrap.svg'
// import Codepen from '../images/codepen.svg'
// import CSS3_icon from '../images/css3.svg'
// import ESLint from '../images/eslint.svg'
// import Git from '../images/git.svg'
// import GitHub from '../images/github.svg'
// import GitLab from '../images/gitlab.svg'
// import GraphQL from '../images/graphql.svg'
// import Handlebars from '../images/handlebars.svg'
// import Heroku from '../images/heroku.svg'
// import HTML5_icon from '../images/html5.svg'
// import JavaScript from '../images/javascript.svg'
// import Jest from '../images/jest.svg'
// import JQuery from '../images/jquery.svg'
// import JSON_icon from '../images/json.svg'
// import Linkedin from '../images/linkedin.svg'
// import Material from '../images/material.svg'
// import MomentJS from '../images/momentjs.svg'
// import MongoDB from '../images/mongodb.svg'
// import MySQL from '../images/mysql.svg'
// import Netlify from '../images/netlify.svg'
// import NodeJS from '../images/nodejs.svg'
// import Nodemon from '../images/nodemon.svg'
// import NPM_icon from '../images/npm.svg'
// import ReactJS from '../images/react.svg'
// import Redux from '../images/redux.svg'
// import Sequelize from '../images/sequelize.svg'
// import Slack from '../images/slack.svg'
// import StackOverflow from '../images/stackoverflow.svg'
// import SVG_icon from '../images/svg.svg'
// import Tailwind from '../images/tailwind.svg'
// import Vite_icon from '../images/vite.svg'
// import VSCode from '../images/vscode.svg'
// import WebPack from '../images/webpack.svg'

// const icons = [
// 	{ name: 'Apollo Icon', image: Apollo },
// 	{ name: 'Babel Icon', image: Babel },
// 	{ name: 'Bootstrap Icon', image: Bootstrap },
// 	{ name: 'Codepen Icon', image: Codepen },
// 	{ name: 'CSS3 Icon', image: CSS3_icon },
// 	{ name: 'ESLint Icon', image: ESLint },
// 	{ name: 'Git Icon', image: Git },
// 	{ name: 'GitHub Icon', image: GitHub },
// 	{ name: 'GitLab Icon', image: GitLab },
// 	{ name: 'GraphQL Icon', image: GraphQL },
// 	{ name: 'Handlebars Icon', image: Handlebars },
// 	{ name: 'Heroku Icon', image: Heroku },
// 	{ name: 'HTML5 Icon', image: HTML5_icon },
// 	{ name: 'JavaScript Icon', image: JavaScript },
// 	{ name: 'Jest Icon', image: Jest },
// 	{ name: 'JQuery Icon', image: JQuery },
// 	{ name: 'JSON Icon', image: JSON_icon },
// 	{ name: 'Linkedin Icon', image: Linkedin },
// 	{ name: 'Material Icon', image: Material },
// 	{ name: 'MomentJS Icon', image: MomentJS },
// 	{ name: 'MongoDB Icon', image: MongoDB },
// 	{ name: 'MySQL Icon', image: MySQL },
// 	{ name: 'Netlify Icon', image: Netlify },
// 	{ name: 'NodeJS Icon', image: NodeJS },
// 	{ name: 'Nodemon Icon', image: Nodemon },
// 	{ name: 'NPM Icon', image: NPM_icon },
// 	{ name: 'ReactJS Icon', image: ReactJS },
// 	{ name: 'Redux Icon', image: Redux },
// 	{ name: 'Sequelize Icon', image: Sequelize },
// 	{ name: 'Slack Icon', image: Slack },
// 	{ name: 'Stack Overflow Icon', image: StackOverflow },
// 	{ name: 'SVG Icon', image: SVG_icon },
// 	{ name: 'Tailwind Icon', image: Tailwind },
// 	{ name: 'Vite Icon', image: Vite_icon },
// 	{ name: 'VSCode Icon', image: VSCode },
// 	{ name: 'WebPack Icon', image: WebPack },
// ]

const simple_icons = [
	{ name: 'Apollo Icon', image: <simpleIcons.Apollographql color='#311C87' size='100%' /> },
	{ name: 'Babel Icon', image: <simpleIcons.Babel color='#F9DC3E' size='100%' /> },
	{ name: 'Bootstrap Icon', image: <simpleIcons.Bootstrap color='#7952B3' size='100%' /> },
	{ name: 'Codepen Icon', image: <simpleIcons.Codepen color='#000000' size='100%' /> },
	{ name: 'CSS3 Icon', image: <simpleIcons.Css3 color='#1572B6' size='100%' /> },
	{ name: 'ESLint Icon', image: <simpleIcons.Eslint color='#4B32C3' size='100%' /> },
	{ name: 'Git Icon', image: <simpleIcons.Git color='#F05032' size='100%' /> },
	{ name: 'GitHub Icon', image: <simpleIcons.Github color='#181717' size='100%' /> },
	{ name: 'GitLab Icon', image: <simpleIcons.Git color='#FC6D26' size='100%' /> },
	{ name: 'GraphQL Icon', image: <simpleIcons.Graphql color='#E10098' size='100%' /> },
	{ name: 'Handlebars Icon', image: <simpleIcons.Handlebarsdotjs color='#000000' size='100%' /> },
	{ name: 'Heroku Icon', image: <simpleIcons.Heroku color='#430098' size='100%' /> },
	{ name: 'HTML5 Icon', image: <simpleIcons.Html5 color='#E34F26' size='100%' /> },
	{ name: 'JavaScript Icon', image: <simpleIcons.Javascript color='#F7DF1E' size='100%' /> },
	{ name: 'Jest Icon', image: <simpleIcons.Jest color='#C21325' size='100%' /> },
	{ name: 'JQuery Icon', image: <simpleIcons.Jquery color='#0769AD' size='100%' /> },
	{ name: 'JSON Icon', image: <simpleIcons.Json color='#000000' size='100%' /> },
	{ name: 'Linkedin Icon', image: <simpleIcons.Linkedin color='#0A66C2' size='100%' /> },
	{ name: 'Material Icon', image: <simpleIcons.Mui color='#007FFF' size='100%' /> },
	{ name: 'MongoDB Icon', image: <simpleIcons.Mongodb color='#47A248' size='100%' /> },
	{ name: 'MySQL Icon', image: <simpleIcons.Mysql color='#4479A1' size='100%' /> },
	{ name: 'Netlify Icon', image: <simpleIcons.Netlify color='#00C7B7' size='100%' /> },
	{ name: 'NodeJS Icon', image: <simpleIcons.Nodedotjs color='#339933' size='100%' /> },
	{ name: 'Nodemon Icon', image: <simpleIcons.Nodemon color='#76D04B' size='100%' /> },
	{ name: 'NPM Icon', image: <simpleIcons.Npm color='#CB3837' size='100%' /> },
	{ name: 'Python Icon', image: <simpleIcons.Python color='#3776AB' size='100%' /> },
	{ name: 'ReactJS Icon', image: <simpleIcons.ReactLogo color='#61DAFB' size='100%' /> },
	{ name: 'Redux Icon', image: <simpleIcons.Redux color='#764ABC' size='100%' /> },
	{ name: 'Sequelize Icon', image: <simpleIcons.Sequelize color='#52B0E7' size='100%' /> },
	{ name: 'Slack Icon', image: <simpleIcons.Slack color='#4A154B' size='100%' /> },
	{ name: 'Stack Overflow Icon', image: <simpleIcons.Stackoverflow color='#F58025' size='100%' /> },
	{ name: 'Styled Components Icon', image: <simpleIcons.Styledcomponents color='#DB7093' size='100%' /> },
	{ name: 'SVG Icon', image: <simpleIcons.Svg color='#FFB13B' size='100%' /> },
	{ name: 'Tailwind Icon', image: <simpleIcons.Tailwindcss color='#06B6D4' size='100%' /> },
	{ name: 'Vite Icon', image: <simpleIcons.Vite color='#646CFF' size='100%' /> },
	{ name: 'VSCode Icon', image: <simpleIcons.Visualstudiocode color='#007ACC' size='100%' /> },
	{ name: 'WebPack Icon', image: <simpleIcons.Webpack color='#8DD6F9' size='100%' /> },
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
				{/* <ToolboxIconsWrapper>
					{icons.map((icon, index) => (
						<ToolboxIcon
							src={icon.image}
							key={index}
							alt={icon.name}
						/>
					))}
				</ToolboxIconsWrapper> */}
				<ToolboxSimpleIconsWrapper>
					{simple_icons.map((icon, index) => (
						<ToolboxSimpleIcon index={index}>
							{icon.image}
						</ToolboxSimpleIcon>
					))}
				</ToolboxSimpleIconsWrapper>
			</ToolboxContainer>
		</ToolboxBackground>
	)
}
