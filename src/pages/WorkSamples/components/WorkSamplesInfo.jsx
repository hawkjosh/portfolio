import React from 'react'
import * as Styled from '../styles/WorkSamplesInfo.styled.jsx'

export const WorkSamplesInfo = ({ item, activeIndex }) => {
	return (
		<Styled.Container data-active={item.index === activeIndex ? true : null}>
			<Styled.Title>{item.title}</Styled.Title>
			{item.index === 0 ? (
				<Styled.Wrapper>
					<Styled.Text>{item.info}</Styled.Text>
					<Styled.Text>
						<strong>BONUS</strong>: Check out an alternate version of this app
						at the link below that uses an express.js backend to save and
						retrieve notes from a JSON file.
					</Styled.Text>
				</Styled.Wrapper>
			) : (
				<Styled.Text>{item.info}</Styled.Text>
			)}
		</Styled.Container>
	)
}
