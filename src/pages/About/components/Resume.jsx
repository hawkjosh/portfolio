import React, { useEffect, useRef } from 'react'
import * as Styled from '../styles/Resume.styled.js'

export const Resume = ({ openResume, closeResume }) => {
	const ref = useRef()

	useEffect(() => {
		if (openResume) {
			ref.current.showModal()
			ref.current.scrollTop = 0
		} else {
			ref.current.close()
		}
	}, [openResume])

	const handleDownload = () => {
		window.open(
			'https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI',
			'_blank',
			'noreferrer'
		)
		setShowResume(false)
	}

	return (
		<Styled.Modal
			ref={ref}
			onCancel={closeResume}>
			<Styled.Wrapper>
				<Styled.Image
					src='/resume.png'
					alt='My Resume'
				/>
				<Styled.DownloadBtn onClick={handleDownload}>
					Download
				</Styled.DownloadBtn>
			</Styled.Wrapper>
			<Styled.CloseBtn onClick={closeResume} />
		</Styled.Modal>
	)
}
