import React from 'react'

import {
	StyledContainer,
	StyledTextWrapper,
	StyledTextOne,
	StyledTextTwo,
	StyledButton,
} from './components/styles/Thanks.styled.js'

export const Thanks = () => {
	return (
		<StyledContainer>
			<StyledTextWrapper>
				<StyledTextOne>Thanks for reaching out!</StyledTextOne>
				<StyledTextTwo>I'll get back to you as soon as possible.</StyledTextTwo>
			</StyledTextWrapper>
			<StyledButton to='/'>Return</StyledButton>
		</StyledContainer>
	)
}
