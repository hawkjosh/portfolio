import { useState } from 'react'
import { Resume } from './components/Resume.jsx'
import { Toolbox } from './components/Toolbox.jsx'
import * as Styled from './styles/About.styled.jsx'

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

export const About = () => {
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
		<Styled.Container
			$height={showToolbox || showResume ? 'calc(100vh - 12rem)' : 'auto'}
			$overflow={showToolbox || showResume ? 'hidden' : 'visible'}>
			<Styled.Image
				src='/profile.png'
				alt='My Profile Photo'
			/>

			<Styled.TextWrapper>
				<Styled.Text>{paragraphs[0].text}</Styled.Text>
				<Styled.Text>{paragraphs[1].text}</Styled.Text>
			</Styled.TextWrapper>

			<Styled.BtnsWrapper>
				<Styled.AboutBtn
					type='toolbox'
					onClick={toggleToolbox}
				/>
				<Styled.AboutBtn
					type='resume'
					onClick={toggleToolbox}
				/>
			</Styled.BtnsWrapper>

			<Toolbox
				openToolbox={showToolbox}
				closeToolbox={toggleToolbox}
			/>

			<Resume
				openResume={showResume}
				closeResume={toggleResume}
			/>
		</Styled.Container>
	)
}
