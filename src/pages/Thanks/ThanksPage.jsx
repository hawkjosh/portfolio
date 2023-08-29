import * as Styled from './styles/Thanks.styled.jsx'

export const ThanksPage = () => {
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
