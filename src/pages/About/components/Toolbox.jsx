import React from 'react'

import {
	ToolboxBackground,
	ToolboxContainer,
	ToolboxCloseBtnWrapper,
	ToolboxCloseBtn,
	ToolboxIconsWrapper,
	ToolboxIcon,
} from './styles/Toolbox.styled.js'

import Apollo from '../images/apollo.svg'
import Babel from '../images/babel.svg'
import Bootstrap from '../images/bootstrap.svg'
import Codepen from '../images/codepen.svg'
import CSS3_icon from '../images/css3.svg'
import ESLint from '../images/eslint.svg'
import Git from '../images/git.svg'
import GitHub from '../images/github.svg'
import GitLab from '../images/gitlab.svg'
import GraphQL from '../images/graphql.svg'
import Handlebars from '../images/handlebars.svg'
import Heroku from '../images/heroku.svg'
import HTML5_icon from '../images/html5.svg'
import JavaScript from '../images/javascript.svg'
import Jest from '../images/jest.svg'
import JQuery from '../images/jquery.svg'
import JSON_icon from '../images/json.svg'
import Linkedin from '../images/linkedin.svg'
import Material from '../images/material.svg'
import MomentJS from '../images/momentjs.svg'
import MongoDB from '../images/mongodb.svg'
import MySQL from '../images/mysql.svg'
import Netlify from '../images/netlify.svg'
import NodeJS from '../images/nodejs.svg'
import Nodemon from '../images/nodemon.svg'
import NPM_icon from '../images/npm.svg'
import ReactJS from '../images/react.svg'
import Redux from '../images/redux.svg'
import Sequelize from '../images/sequelize.svg'
import Slack from '../images/slack.svg'
import StackOverflow from '../images/stackoverflow.svg'
import SVG_icon from '../images/svg.svg'
import Tailwind from '../images/tailwind.svg'
import Vite_icon from '../images/vite.svg'
import VSCode from '../images/vscode.svg'
import WebPack from '../images/webpack.svg'

const icons = [
	{ name: 'Apollo Icon', image: Apollo },
	{ name: 'Babel Icon', image: Babel },
	{ name: 'Bootstrap Icon', image: Bootstrap },
	{ name: 'Codepen Icon', image: Codepen },
	{ name: 'CSS3 Icon', image: CSS3_icon },
	{ name: 'ESLint Icon', image: ESLint },
	{ name: 'Git Icon', image: Git },
	{ name: 'GitHub Icon', image: GitHub },
	{ name: 'GitLab Icon', image: GitLab },
	{ name: 'GraphQL Icon', image: GraphQL },
	{ name: 'Handlebars Icon', image: Handlebars },
	{ name: 'Heroku Icon', image: Heroku },
	{ name: 'HTML5 Icon', image: HTML5_icon },
	{ name: 'JavaScript Icon', image: JavaScript },
	{ name: 'Jest Icon', image: Jest },
	{ name: 'JQuery Icon', image: JQuery },
	{ name: 'JSON Icon', image: JSON_icon },
	{ name: 'Linkedin Icon', image: Linkedin },
	{ name: 'Material Icon', image: Material },
	{ name: 'MomentJS Icon', image: MomentJS },
	{ name: 'MongoDB Icon', image: MongoDB },
	{ name: 'MySQL Icon', image: MySQL },
	{ name: 'Netlify Icon', image: Netlify },
	{ name: 'NodeJS Icon', image: NodeJS },
	{ name: 'Nodemon Icon', image: Nodemon },
	{ name: 'NPM Icon', image: NPM_icon },
	{ name: 'ReactJS Icon', image: ReactJS },
	{ name: 'Redux Icon', image: Redux },
	{ name: 'Sequelize Icon', image: Sequelize },
	{ name: 'Slack Icon', image: Slack },
	{ name: 'Stack Overflow Icon', image: StackOverflow },
	{ name: 'SVG Icon', image: SVG_icon },
	{ name: 'Tailwind Icon', image: Tailwind },
	{ name: 'Vite Icon', image: Vite_icon },
	{ name: 'VSCode Icon', image: VSCode },
	{ name: 'WebPack Icon', image: WebPack },
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
						<ToolboxIcon
							src={icon.image}
							key={index}
							alt={icon.name}
						/>
					))}
				</ToolboxIconsWrapper>
			</ToolboxContainer>
		</ToolboxBackground>
	)
}
