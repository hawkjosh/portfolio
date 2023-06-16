import React from 'react'

import avatar from './images/avatar.svg'

import {
	StyledContainer,
	Avatar,
	StyledDividerWrapper,
	StyledDivider,
	StyledIcons,
	Laptop,
	Superhero,
	Tennessee,
} from './components/styles/Home.styled.js'

export const Home = () => {
	return (
		<StyledContainer>
			<Avatar
				src={avatar}
				alt='My Avatar'
			/>
			<StyledDividerWrapper>
				<StyledDivider />
			</StyledDividerWrapper>
			<StyledIcons>
				<Laptop />
				<Superhero />
				<Tennessee />
			</StyledIcons>
		</StyledContainer>
	)
}
