import { useEffect, useRef } from 'react'
import * as simpleIcons from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

const icons = [
	{
		name: 'Apollo',
		image: <simpleIcons.Apollographql color='#311C87' />,
		top: '-25%',
		color: '#311C87',
		shadow: '#FFFFFF',
	},
	{
		name: 'Babel',
		image: <simpleIcons.Babel color='#F9DC3E' />,
		top: '-25%',
		color: '#F9DC3E',
		shadow: '#36354F',
	},
	{
		name: 'Bootstrap',
		image: <simpleIcons.Bootstrap color='#7952B3' />,
		top: '-25%',
		color: '#7952B3',
		shadow: '#FFFFFF',
	},
	{
		name: 'CodePen',
		image: <simpleIcons.Codepen color='#000000' />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'CSS',
		image: <simpleIcons.Css3 color='#1572B6' />,
		top: '-25%',
		color: '#1572B6',
		shadow: '#FFFFFF',
	},
	{
		name: 'ESLint',
		image: <simpleIcons.Eslint color='#4B32C3' />,
		top: '-25%',
		color: '#4B32C3',
		shadow: '#FFFFFF',
	},
	{
		name: 'Flask',
		image: <simpleIcons.Flask color='#000000' />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Git',
		image: <simpleIcons.Git color='#F05032' />,
		top: '-25%',
		color: '#F05032',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitHub',
		image: <simpleIcons.Github color='#181717' />,
		top: '-25%',
		color: '#181717',
		shadow: '#FFFFFF',
	},
	{
		name: 'GitLab',
		image: <simpleIcons.Gitlab color='#FC6D26' />,
		top: '-25%',
		color: '#FC6D26',
		shadow: '#FFFFFF',
	},
	{
		name: 'GraphQL',
		image: <simpleIcons.Graphql color='#E10098' />,
		top: '-25%',
		color: '#E10098',
		shadow: '#FFFFFF',
	},
	{
		name: 'Handlebars',
		image: <simpleIcons.Handlebarsdotjs color='#000000' />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'Heroku',
		image: <simpleIcons.Heroku color='#430098' />,
		top: '-25%',
		color: '#430098',
		shadow: '#FFFFFF',
	},
	{
		name: 'HTML',
		image: <simpleIcons.Html5 color='#E34F26' />,
		top: '-25%',
		color: '#E34F26',
		shadow: '#FFFFFF',
	},
	{
		name: 'JavaScript',
		image: <simpleIcons.Javascript color='#F7DF1E' />,
		top: '-25%',
		color: '#F7DF1E',
		shadow: '#36354F',
	},
	{
		name: 'Jest',
		image: <simpleIcons.Jest color='#C21325' />,
		top: '-25%',
		color: '#C21325',
		shadow: '#FFFFFF',
	},
	{
		name: 'JQuery',
		image: <simpleIcons.Jquery color='#0769AD' />,
		top: '-25%',
		color: '#0769AD',
		shadow: '#FFFFFF',
	},
	{
		name: 'JSON',
		image: <simpleIcons.Json color='#000000' />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'LinkedIn',
		image: <simpleIcons.Linkedin color='#0A66C2' />,
		top: '-25%',
		color: '#0A66C2',
		shadow: '#FFFFFF',
	},
	{
		name: 'Material',
		image: <simpleIcons.Mui color='#007FFF' />,
		top: '-25%',
		color: '#007FFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'MongoDB',
		image: <simpleIcons.Mongodb color='#47A248' />,
		top: '-25%',
		color: '#47A248',
		shadow: '#FFFFFF',
	},
	{
		name: 'MySQL',
		image: <simpleIcons.Mysql color='#4479A1' />,
		top: '-25%',
		color: '#4479A1',
		shadow: '#FFFFFF',
	},
	{
		name: 'Netlify',
		image: <simpleIcons.Netlify color='#00C7B7' />,
		top: '-25%',
		color: '#00C7B7',
		shadow: '#FFFFFF',
	},
	{
		name: 'NextJS',
		image: <simpleIcons.Nextdotjs color='#000000' />,
		top: '-25%',
		color: '#000000',
		shadow: '#FFFFFF',
	},
	{
		name: 'NodeJS',
		image: <simpleIcons.Nodedotjs color='#339933' />,
		top: '-25%',
		color: '#339933',
		shadow: '#FFFFFF',
	},
	{
		name: 'Nodemon',
		image: <simpleIcons.Nodemon color='#76D04B' />,
		top: '-25%',
		color: '#76D04B',
		shadow: '#FFFFFF',
	},
	{
		name: 'NPM',
		image: <simpleIcons.Npm color='#CB3837' />,
		top: '-25%',
		color: '#CB3837',
		shadow: '#FFFFFF',
	},
	{
		name: 'Python',
		image: <simpleIcons.Python color='#3776AB' />,
		top: '-25%',
		color: '#3776AB',
		shadow: '#FFFFFF',
	},
	{
		name: 'ReactJS',
		image: <simpleIcons.ReactLogo color='#61DAFB' />,
		top: '-25%',
		color: '#61DAFB',
		shadow: '#36354F',
	},
	{
		name: 'Redux',
		image: <simpleIcons.Redux color='#764ABC' />,
		top: '-25%',
		color: '#764ABC',
		shadow: '#FFFFFF',
	},
	{
		name: 'Sequelize',
		image: <simpleIcons.Sequelize color='#52B0E7' />,
		top: '-25%',
		color: '#52B0E7',
		shadow: '#FFFFFF',
	},
	{
		name: 'Slack',
		image: <simpleIcons.Slack color='#4A154B' />,
		top: '-25%',
		color: '#4A154B',
		shadow: '#FFFFFF',
	},
	{
		name: 'Stack Overflow',
		image: <simpleIcons.Stackoverflow color='#F58025' />,
		top: '-25%',
		color: '#F58025',
		shadow: '#FFFFFF',
	},
	{
		name: 'Styled Components',
		image: <simpleIcons.Styledcomponents color='#DB7093' />,
		top: '-25%',
		color: '#DB7093',
		shadow: '#FFFFFF',
	},
	{
		name: 'SVG',
		image: <simpleIcons.Svg color='#FFB13B' />,
		top: '-25%',
		color: '#FFB13B',
		shadow: '#36354F',
	},
	{
		name: 'Tailwind',
		image: <simpleIcons.Tailwindcss color='#06B6D4' />,
		top: '-25%',
		color: '#06B6D4',
		shadow: '#FFFFFF',
	},
	{
		name: 'TypeScript',
		image: <simpleIcons.Typescript color='#3178C6' />,
		top: '-25%',
		color: '#3178C6',
		shadow: '#FFFFFF',
	},
	{
		name: 'Vite',
		image: <simpleIcons.Vite color='#646CFF' />,
		top: '-25%',
		color: '#646CFF',
		shadow: '#FFFFFF',
	},
	{
		name: 'VSCode',
		image: <simpleIcons.Visualstudiocode color='#007ACC' />,
		top: '-25%',
		color: '#007ACC',
		shadow: '#FFFFFF',
	},
	{
		name: 'WebPack',
		image: <simpleIcons.Webpack color='#8DD6F9' />,
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
					// <Styled.Icon key={index}>
					// 	{icon.image}
					// 	<Styled.Tooltip
					// 		$color={icon.color}
					// 		$transform={icon.transform}
					// 		$shadow={icon.shadow}>
					// 		{icon.name}
					// 	</Styled.Tooltip>
					// </Styled.Icon>
					<Styled.Icon key={index}>
						{icon.image}
						<Styled.Tooltip
							$top={icon.top}
							$color={icon.color}
							$shadow={icon.shadow}>
							{icon.name}
						</Styled.Tooltip>
					</Styled.Icon>
					// <Styled.Icon
					// 	key={index}
					// 	$color={icon.color}>
					// 	<Styled.Tooltip
					// 		$color={icon.color}
					// 		$transform={icon.transform}>
					// 		{icon.name}
					// 	</Styled.Tooltip>
					// 	{icon.image}
					// </Styled.Icon>
				))}
			</Styled.Wrapper>
			<Styled.CloseBtn onClick={closeToolbox} />
		</Styled.Modal>
	)
}
