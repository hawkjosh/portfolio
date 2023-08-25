import { useEffect, useRef } from 'react'
import * as simpleIcons from '@styled-icons/simple-icons'
import * as Styled from '../styles/Toolbox.styled.jsx'

const icons = [
	{
		name: 'Apollo',
		image: <simpleIcons.Apollographql color='#311C87' />,
		color: '#311C87',
		shadow: 'orangered',
	},
	{
		name: 'Babel',
		image: <simpleIcons.Babel color='#F9DC3E' />,
		color: '#F9DC3E',
		shadow: 'white',
	},
	{
		name: 'Bootstrap',
		image: <simpleIcons.Bootstrap color='#7952B3' />,
		color: '#7952B3',
		shadow: 'white',
		transform: 'translateY(-100%)',
	},
	{
		name: 'CodePen',
		image: <simpleIcons.Codepen color='#000000' />,
		color: '#000000',
		shadow: 'white',
	},
	{
		name: 'CSS',
		image: <simpleIcons.Css3 color='#1572B6' />,
		color: '#1572B6',
		shadow: 'white',
	},
	{
		name: 'ESLint',
		image: <simpleIcons.Eslint color='#4B32C3' />,
		color: '#4B32C3',
		shadow: 'white',
		transform: 'translateY(-110%)',
	},
	{
		name: 'Flask',
		image: <simpleIcons.Flask color='#000000' />,
		color: '#000000',
		shadow: 'white',
		transform: 'translateY(-110%)',
	},
	{
		name: 'Git',
		image: <simpleIcons.Git color='#F05032' />,
		color: '#F05032',
		shadow: 'white',
	},
	{
		name: 'GitHub',
		image: <simpleIcons.Github color='#181717' />,
		color: '#181717',
		shadow: 'white',
		transform: 'translateY(-115%)',
	},
	{
		name: 'GitLab',
		image: <simpleIcons.Gitlab color='#FC6D26' />,
		color: '#FC6D26',
		shadow: 'white',
	},
	{
		name: 'GraphQL',
		image: <simpleIcons.Graphql color='#E10098' />,
		color: '#E10098',
		shadow: 'white',
	},
	{
		name: 'Handlebars',
		image: <simpleIcons.Handlebarsdotjs color='#000000' />,
		color: '#000000',
		shadow: 'white',
		transform: 'translateY(-60%)',
	},
	{
		name: 'Heroku',
		image: <simpleIcons.Heroku color='#430098' />,
		color: '#430098',
		shadow: 'white',
	},
	{
		name: 'HTML',
		image: <simpleIcons.Html5 color='#E34F26' />,
		color: '#E34F26',
		shadow: 'white',
	},
	{
		name: 'JavaScript',
		image: <simpleIcons.Javascript color='#F7DF1E' />,
		color: '#F7DF1E',
		shadow: 'white',
	},
	{
		name: 'Jest',
		image: <simpleIcons.Jest color='#C21325' />,
		color: '#C21325',
		shadow: 'white',
	},
	{
		name: 'JQuery',
		image: <simpleIcons.Jquery color='#0769AD' />,
		color: '#0769AD',
		shadow: 'white',
	},
	{
		name: 'JSON',
		image: <simpleIcons.Json color='#000000' />,
		color: '#000000',
		shadow: 'white',
		transform: 'translateY(-125%)',
	},
	{
		name: 'LinkedIn',
		image: <simpleIcons.Linkedin color='#0A66C2' />,
		color: '#0A66C2',
		shadow: 'white',
	},
	{
		name: 'Material',
		image: <simpleIcons.Mui color='#007FFF' />,
		color: '#007FFF',
		shadow: 'white',
		transform: 'translateY(-110%)',
	},
	{
		name: 'MongoDB',
		image: <simpleIcons.Mongodb color='#47A248' />,
		color: '#47A248',
		shadow: 'white',
		transform: 'translateY(-140%)',
	},
	{
		name: 'MySQL',
		image: <simpleIcons.Mysql color='#4479A1' />,
		color: '#4479A1',
		shadow: 'white',
		transform: 'translateY(-80%)',
	},
	{
		name: 'Netlify',
		image: <simpleIcons.Netlify color='#00C7B7' />,
		color: '#00C7B7',
		shadow: 'white',
	},
	{
		name: 'NextJS',
		image: <simpleIcons.Nextdotjs color='#000000' />,
		color: '#000000',
		shadow: 'white',
	},
	{
		name: 'NodeJS',
		image: <simpleIcons.Nodedotjs color='#339933' />,
		color: '#339933',
		shadow: 'white',
	},
	{
		name: 'Nodemon',
		image: <simpleIcons.Nodemon color='#76D04B' />,
		color: '#76D04B',
		shadow: 'white',
	},
	{
		name: 'NPM',
		image: <simpleIcons.Npm color='#CB3837' />,
		color: '#CB3837',
		shadow: 'white',
	},
	{
		name: 'Python',
		image: <simpleIcons.Python color='#3776AB' />,
		color: '#3776AB',
		shadow: 'white',
	},
	{
		name: 'ReactJS',
		image: <simpleIcons.ReactLogo color='#61DAFB' />,
		color: '#61DAFB',
		shadow: 'white',
		transform: 'translateY(-120%)',
	},
	{
		name: 'Redux',
		image: <simpleIcons.Redux color='#764ABC' />,
		color: '#764ABC',
		shadow: 'white',
		transform: 'translateY(-120%)',
	},
	{
		name: 'Sequelize',
		image: <simpleIcons.Sequelize color='#52B0E7' />,
		color: '#52B0E7',
		shadow: 'white',
	},
	{
		name: 'Slack',
		image: <simpleIcons.Slack color='#4A154B' />,
		color: '#4A154B',
		shadow: 'white',
	},
	{
		name: 'Stack Overflow',
		image: <simpleIcons.Stackoverflow color='#F58025' />,
		color: '#F58025',
		shadow: 'white',
		transform: 'translateY(-115%)',
	},
	{
		name: 'Styled Components',
		image: <simpleIcons.Styledcomponents color='#DB7093' />,
		color: '#DB7093',
		shadow: 'white',
		transform: 'translateY(-65%)',
	},
	{
		name: 'SVG',
		image: <simpleIcons.Svg color='#FFB13B' />,
		color: '#FFB13B',
		shadow: 'white',
		transform: 'translateY(-125%)',
	},
	{
		name: 'Tailwind',
		image: <simpleIcons.Tailwindcss color='#06B6D4' />,
		color: '#06B6D4',
		shadow: 'white',
		transform: 'translateY(-70%)',
	},
	{
		name: 'TypeScript',
		image: <simpleIcons.Typescript color='#3178C6' />,
		color: '#3178C6',
		shadow: 'white',
		transform: 'translateY(-140%)',
	},
	{
		name: 'Vite',
		image: <simpleIcons.Vite color='#646CFF' />,
		color: '#646CFF',
		shadow: 'white',
	},
	{
		name: 'VSCode',
		image: <simpleIcons.Visualstudiocode color='#007ACC' />,
		color: '#007ACC',
		shadow: 'white',
	},
	{
		name: 'WebPack',
		image: <simpleIcons.Webpack color='#8DD6F9' />,
		color: '#8DD6F9',
		shadow: 'white',
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
					<Styled.Icon key={index}>
						{icon.image}
						<Styled.Tooltip
							$color={icon.color}
							$transform={icon.transform}
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
