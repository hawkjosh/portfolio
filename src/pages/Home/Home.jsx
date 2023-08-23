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
				<Styled.HomeIcon type='laptop' />
				<Styled.HomeIcon type='superhero' />
				<Styled.HomeIcon type='tennessee' />
			</Styled.IconsContainer>
		</Styled.Container>
	)
}
