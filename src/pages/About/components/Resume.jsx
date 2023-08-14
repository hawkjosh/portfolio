import React from 'react'

import {
	ResumeBackground,
	ResumeContainer,
	ResumeContentWrapper,
	ResumePic,
	DownloadBtn,
	ResumeCloseBtnWrapper,
	ResumeCloseBtn,
} from './styles/Resume.styled.js'

import resume from '/resume.png'

export const Resume = ({ setShowResume }) => {
	const handleDownload = () => {
		window.open(
			'https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI',
			'_blank'
		)
		setShowResume(false)
	}

	return (
		<ResumeBackground>
			<ResumeContainer>
				<ResumeContentWrapper>
					<ResumePic
						src={resume}
						alt='My Resume'
					/>
					<DownloadBtn onClick={handleDownload}>Download</DownloadBtn>
				</ResumeContentWrapper>
				<ResumeCloseBtnWrapper>
					<ResumeCloseBtn
						onClick={() => {
							setShowResume(false)
						}}
					/>
				</ResumeCloseBtnWrapper>
			</ResumeContainer>
		</ResumeBackground>
	)
}
