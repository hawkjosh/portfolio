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
				<Styled.Icon icon='laptop' />
				<Styled.Icon icon='superhero' />
				<Styled.Icon icon='tennessee' />
				{/* <Styled.Laptop /> */}
				{/* <Styled.Superhero /> */}
				{/* <Styled.Tennessee /> */}
			</Styled.IconsContainer>
		</Styled.Container>
	)
}
