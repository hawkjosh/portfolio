import React from 'react'
import * as Styled from './styles/Home.styled.js'

export const Home = () => {
	return (
		<Styled.Container>
			<Styled.Image
				src='/avatar.svg'
				alt='My Avatar'
			/>
			<Styled.Wrapper>
				<Styled.Divider />
			</Styled.Wrapper>
			<Styled.Icons>
				<Styled.Laptop />
				<Styled.Superhero />
				<Styled.Tennessee />
			</Styled.Icons>
		</Styled.Container>
	)
}
