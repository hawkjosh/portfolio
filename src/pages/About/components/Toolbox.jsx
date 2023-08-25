import { useEffect, useRef } from 'react'
import * as simpleIcons from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

const icons = [
	{
		name: 'Apollo',
		image: <simpleIcons.Apollographql />,
		top: '-25%',
		color: '#311C87',
		shadow: '#FFFFFF',
	},
	{
		name: 'Babel',
		image: <simpleIcons.Babel />,
		top: '-25%',
		color: '#F9DC3E',
		shadow: '#36354F',
	},
	{
		name: 'Bootstrap',
		image: <simpleIcons.Bootstrap />,
		top: '-25%',
		color: '#7952B3',
		shadow: '#FFFFFF',
	},
	{
		name: 'CodePen',
		image: <simpleIcons.Codepen />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'CSS',
		image: <simpleIcons.Css3 />,
		top: '-25%',
		color: '#1572B6',
		shadow: '#FFFFFF',
	},
	{
		name: 'ESLint',
		image: <simpleIcons.Eslint />,
		top: '-25%',
		color: '#4B32C3',
		shadow: '#FFFFFF',
	},
	{
		name: 'Flask',
		image: <simpleIcons.Flask />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Git',
		image: <simpleIcons.Git />,
		top: '-25%',
		color: '#F05032',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitHub',
		image: <simpleIcons.Github />,
		top: '-25%',
		color: '#181717',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitLab',
		image: <simpleIcons.Gitlab />,
		top: '-25%',
		color: '#FC6D26',
		shadow: '#FFFFFF',
	},
	{
		name: 'GraphQL',
		image: <simpleIcons.Graphql />,
		top: '-25%',
		color: '#E10098',
		shadow: '#FFFFFF',
	},
	{
		name: 'Handlebars',
		image: <simpleIcons.Handlebarsdotjs />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Heroku',
		image: <simpleIcons.Heroku />,
		top: '-25%',
		color: '#430098',
		shadow: '#FFFFFF',
	},
	{
		name: 'HTML',
		image: <simpleIcons.Html5 />,
		top: '-25%',
		color: '#E34F26',
		shadow: '#FFFFFF',
	},
	{
		name: 'JavaScript',
		image: <simpleIcons.Javascript />,
		top: '-25%',
		color: '#F7DF1E',
		shadow: '#36354F',
	},
	{
		name: 'Jest',
		image: <simpleIcons.Jest />,
		top: '-25%',
		color: '#C21325',
		shadow: '#FFFFFF',
	},
	{
		name: 'JQuery',
		image: <simpleIcons.Jquery />,
		top: '-25%',
		color: '#0769AD',
		shadow: '#FFFFFF',
	},
	{
		name: 'JSON',
		image: <simpleIcons.Json />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'LinkedIn',
		image: <simpleIcons.Linkedin />,
		top: '-25%',
		color: '#0A66C2',
		shadow: '#FFFFFF',
	},
	{
		name: 'Material',
		image: <simpleIcons.Mui />,
		top: '-25%',
		color: '#007FFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'MongoDB',
		image: <simpleIcons.Mongodb />,
		top: '-25%',
		color: '#47A248',
		shadow: '#FFFFFF',
	},
	{
		name: 'MySQL',
		image: <simpleIcons.Mysql />,
		top: '-25%',
		color: '#4479A1',
		shadow: '#FFFFFF',
	},
	{
		name: 'Netlify',
		image: <simpleIcons.Netlify />,
		top: '-25%',
		color: '#00C7B7',
		shadow: '#FFFFFF',
	},
	{
		name: 'NextJS',
		image: <simpleIcons.Nextdotjs />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'NodeJS',
		image: <simpleIcons.Nodedotjs />,
		top: '-25%',
		color: '#339933',
		shadow: '#FFFFFF',
	},
	{
		name: 'Nodemon',
		image: <simpleIcons.Nodemon />,
		top: '-25%',
		color: '#76D04B',
		shadow: '#FFFFFF',
	},
	{
		name: 'NPM',
		image: <simpleIcons.Npm />,
		top: '-25%',
		color: '#CB3837',
		shadow: '#FFFFFF',
	},
	{
		name: 'Python',
		image: <simpleIcons.Python />,
		top: '-25%',
		color: '#3776AB',
		shadow: '#FFFFFF',
	},
	{
		name: 'ReactJS',
		image: <simpleIcons.ReactLogo />,
		top: '-25%',
		color: '#61DAFB',
		shadow: '#36354F',
	},
	{
		name: 'Redux',
		image: <simpleIcons.Redux />,
		top: '-25%',
		color: '#764ABC',
		shadow: '#FFFFFF',
	},
	{
		name: 'Sequelize',
		image: <simpleIcons.Sequelize />,
		top: '-25%',
		color: '#52B0E7',
		shadow: '#FFFFFF',
	},
	{
		name: 'Slack',
		image: <simpleIcons.Slack />,
		top: '-25%',
		color: '#4A154B',
		shadow: '#FFFFFF',
	},
	{
		name: 'Stack Overflow',
		image: <simpleIcons.Stackoverflow />,
		top: '-25%',
		color: '#F58025',
		shadow: '#FFFFFF',
	},
	{
		name: 'Styled Components',
		image: <simpleIcons.Styledcomponents />,
		top: '-25%',
		color: '#DB7093',
		shadow: '#FFFFFF',
	},
	{
		name: 'SVG',
		image: <simpleIcons.Svg />,
		top: '-25%',
		color: '#FFB13B',
		shadow: '#36354F',
	},
	{
		name: 'Tailwind',
		image: <simpleIcons.Tailwindcss />,
		top: '-25%',
		color: '#06B6D4',
		shadow: '#FFFFFF',
	},
	{
		name: 'TypeScript',
		image: <simpleIcons.Typescript />,
		top: '-25%',
		color: '#3178C6',
		shadow: '#FFFFFF',
	},
	{
		name: 'Vite',
		image: <simpleIcons.Vite />,
		top: '-25%',
		color: '#646CFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'VSCode',
		image: <simpleIcons.Visualstudiocode />,
		top: '-25%',
		color: '#007ACC',
		shadow: '#FFFFFF',
	},
	{
		name: 'WebPack',
		image: <simpleIcons.Webpack />,
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
					<Styled.Icon
						key={index}
						icon={icon.image}
						color={icon.color}
						// $top={icon.top}
						// $shadow={icon.shadow}
						// name={icon.name}
					/>
				))}
			</Styled.Wrapper>
			<Styled.CloseBtn onClick={closeToolbox} />
		</Styled.Modal>
	)
}
