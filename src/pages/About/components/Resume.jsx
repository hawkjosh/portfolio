import React from 'react'
import * as Styled from '../styles/Resume.styled.js'

export const Resume = ({ setShowResume }) => {
	const handleDownload = () => {
		window.open(
			'https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI',
			'_blank',
			'noreferrer'
		)
		setShowResume(false)
	}

	return (
		<Styled.Background>
			<Styled.Container>
				<Styled.Wrapper>
					<Styled.Image
						src='/resume.png'
						alt='My Resume'
					/>
					<Styled.DownloadBtn onClick={handleDownload}>
						Download
					</Styled.DownloadBtn>
				</Styled.Wrapper>
				<Styled.CloseBtn onClick={() => setShowResume(false)} />
			</Styled.Container>
		</Styled.Background>
	)
}
