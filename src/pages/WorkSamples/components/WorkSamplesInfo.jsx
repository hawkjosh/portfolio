import React from 'react'

import {
	InfoWrapper,
	InfoTitle,
	InfoText,
} from './styles/WorkSamplesInfo.styled.js'

export const WorkSamplesInfo = ({ item, activeIndex }) => {
	return (
		<InfoWrapper
			data-status={item.index === activeIndex ? 'active' : 'inactive'}>
			<InfoTitle>{item.title}</InfoTitle>
			{item.index === 0 ? (
				<>
					<InfoText>{item.info}</InfoText>
					<br />
					<InfoText>
						<strong>BONUS</strong>: Check out an alternate version of this app
						at the link below that uses an express.js backend to save and
						retrieve notes from a JSON file.
					</InfoText>
				</>
			) : (
				<InfoText>{item.info}</InfoText>
			)}
		</InfoWrapper>
	)
}
