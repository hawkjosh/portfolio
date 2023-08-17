import React from 'react'
import * as Styled from './styles/Thanks.styled.js'

export const Thanks = () => {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.TextOne>Thanks for reaching out!</Styled.TextOne>
				<Styled.TextTwo>
					I'll get back to you as soon as possible.
				</Styled.TextTwo>
			</Styled.Wrapper>
			<Styled.Button to='/'>Return</Styled.Button>
		</Styled.Container>
	)
}
