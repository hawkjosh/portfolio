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
			<InfoText>{item.info}</InfoText>
		</InfoWrapper>
	)
}
