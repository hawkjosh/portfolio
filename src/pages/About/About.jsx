import React, { useState } from 'react'

import profile from './images/profile.png'

import {
	StyledContainer,
	Profile,
	StyledTextWrapper,
	StyledText,
	StyledBtnsWrapper,
	ToolboxBtn,
	ResumeBtn,
} from './components/styles/About.styled.js'

const paragraphs = [
	{
		index: 0,
		pid: 'paragraph1of2',
		text: `Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change. I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field.`,
	},
	{
		index: 1,
		pid: 'paragraph2of2',
		text: `Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!`,
	},
]

export const About = () => {
	const [showToolbox, setShowToolbox] = useState(false)
	const [showResume, setShowResume] = useState(false)

	const handleToolboxClick = () => {
		setShowToolbox(true)
		window.scrollTo(0, 0)
	}

	const handleResumeClick = () => {
		setShowResume(true)
		window.scrollTo(0, 0)
	}

	return (
		<StyledContainer
			style={{
				height: showToolbox || showResume ? 'calc(100vh - 10rem)' : 'auto',
				overflowY: showToolbox || showResume ? 'hidden' : 'visible',
			}}>
			<Profile
				src={profile}
				alt='My Profile Photo'
			/>
			<StyledTextWrapper>
				<StyledText>{paragraphs[0].text}</StyledText>
				<StyledText>{paragraphs[1].text}</StyledText>
			</StyledTextWrapper>
			<StyledBtnsWrapper>
				<ToolboxBtn onClick={handleToolboxClick} />
				<ResumeBtn onClick={handleResumeClick} />
			</StyledBtnsWrapper>

			{showToolbox && alert('Toolbox Component')}
			{showResume && alert('Resume Component')}
		</StyledContainer>
	)
}
