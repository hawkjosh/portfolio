import { useState } from 'react'
import styled from 'styled-components'
import { screen } from '../../GlobalStyle.jsx'
import { Resume } from './components/Resume.jsx'
import { Toolbox } from './components/Toolbox.jsx'
import { AboutIcon } from './components/About.icons.jsx'

const paragraphs = [
	{
		index: 0,
		pid: 'paragraph1of2',
		text: `Welcome to my online portfolio! I'm Josh Hawk, a dedicated professional with 15 years of experience in education and a newfound passion for programming and web development. While I began my journey as a high school educator, I made a bold decision to transition into the incredible world of software engineering. To equip myself with the necessary skills, I enrolled in a comprehensive full stack web development boot camp at Georgia Tech. Since completing the boot camp, I've immersed myself in coding projects daily, consistently reinforcing my existing knowledge and embracing the boundless growth potential of this dynamic and ever-evolving field.`,
	},
	{
		index: 1,
		pid: 'paragraph2of2',
		text: `As you explore my portfolio, you'll discover a collection of standout projects that highlight my capabilities. From collaborative team efforts during the boot camp to personal undertakings, each project showcases my commitment to creating innovative solutions. Don't miss the opportunity to explore my acquired skills and professional experiences through the toolbox and resume links provided on this page. I'm always eager to connect, so don't hesitate to reach out via the contact link above. Thank you for visiting, and I look forward to the possibility of working together!`,
	},
]

export const AboutPage = () => {
	const [showToolbox, setShowToolbox] = useState(false)
	const [showResume, setShowResume] = useState(false)

	const toggleToolbox = () => {
		showToolbox ? setShowToolbox(false) : setShowToolbox(true)
		window.scrollTo(0, 0)
	}

	const toggleResume = () => {
		showResume ? setShowResume(false) : setShowResume(true)
		window.scrollTo(0, 0)
	}

	return (
		<PageWrapper
			$height={showToolbox || showResume ? 'calc(100vh - 12rem)' : 'auto'}
			$overflow={showToolbox || showResume ? 'hidden' : 'visible'}>
			<Image
				src='/profile.png'
				alt='My Profile Photo'
			/>
			<TextContainer>
				<Text>{paragraphs[0].text}</Text>
				<Text>{paragraphs[1].text}</Text>
			</TextContainer>
			<BtnsContainer>
				<Button
					type='toolbox'
					onClick={toggleToolbox}
				/>
				<Button
					type='resume'
					onClick={toggleResume}
				/>
			</BtnsContainer>
			<Toolbox
				openToolbox={showToolbox}
				closeToolbox={toggleToolbox}
			/>
			<Resume
				openResume={showResume}
				closeResume={toggleResume}
			/>
		</PageWrapper>
	)
}

// Styled-Components
const PageWrapper = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: auto;
	height: ${({ $height }) => $height};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	padding-bottom: 5rem;
	overflow-y: ${({ $overflow }) => $overflow};
	@media ${screen.minSm} {
		display: block;
	}
`

const Image = styled.img`
	width: clamp(16rem, 12.853rem + 11.765vw, 18.5rem);
	object-fit: cover;
	background: var(--color-secondary);
	border: 0.25rem solid hsla(360, 100%, 100%, 1);
	border-radius: 50%;
	box-shadow: 0.375rem 0.375rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.4);
	margin-bottom: 2rem;
	padding: 0.5rem;
	@media ${screen.minSm} {
		width: clamp(18.5rem, 11.75rem + 14.063vw, 23rem);
		float: right;
		box-shadow: -0.375rem 0.375rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.4);
		shape-outside: ellipse(50% 50% at 50% 50%);
		margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
		margin-bottom: 1rem;
	}
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	margin-bottom: 2rem;
	@media ${screen.minSm} {
		display: block;
		margin-bottom: clamp(2rem, 1.25rem + 1.563vw, 2.5rem);
	}
`

const Text = styled.div`
	font-weight: 200;
	text-align: justify;
	text-justify: inter-character;
	font-size: clamp(1.125rem, 0.93rem + 0.8vw, 1.25rem);
	line-height: 1.375;
	&:nth-of-type(1) {
		margin-bottom: clamp(1.75rem, 1.25rem + 1.25vw, 2.25rem);
		@media ${screen.maxSm} {
			margin-bottom: 0;
		}
	}
	@media ${screen.minSm} {
		font-size: clamp(1.25rem, 1.063rem + 0.391vw, 1.375rem);
		line-height: 1.5;
	}
`

const BtnsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1.25rem;
	@media ${screen.minMd} {
		width: 75%;
	}
`

const Button = styled(AboutIcon)`
	width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition-property: transform, fill, stroke;
	transition-duration: 250ms, 500ms, 500ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		transform: scale(1.125);
	}
	@media ${screen.minSm} {
		width: clamp(12rem, 6rem + 12.5vw, 16rem);
	}
`
