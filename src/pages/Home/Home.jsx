import * as Styled from './styles/Home.styled.jsx'

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
			<Styled.IconsContainer>
				<Styled.Icon type='laptop' />
				<Styled.Icon type='superhero' />
				<Styled.Icon type='tennessee' />
			</Styled.IconsContainer>
		</Styled.Container>
	)
}
