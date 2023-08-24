import * as Styled from './styles/NoPage.styled.jsx'

export const NoPage = () => {
	return (
		<Styled.Container>
			<Styled.Text>
				Uh oh! Looks like something went wrong. Click{' '}
				<Styled.Link href='/'>HERE</Styled.Link> to return.
			</Styled.Text>
		</Styled.Container>
	)
}
