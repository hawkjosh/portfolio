import React from 'react'
import * as Styled from './styles/NoPage.styled.js'

export const NoPage = () => {
	return (
		<>
			<Styled.Container>
				<Styled.Text>
					Uh oh! Looks like something went wrong. Click <a href='/'>HERE</a> to return.
				</Styled.Text>
			</Styled.Container>
		</>
	)
}
