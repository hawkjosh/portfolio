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
				{/* <Styled.Icon
					icon='laptop'
					fill='hsla(360, 100%, 100%, 1)'
					stroke='var(--color-secondary)'
					strokeWidth='15'
				/>
				<Styled.Icon
					icon='superhero'
					fill='hsla(240, 100%, 50%, 1)'
					stroke='hsla(0, 100%, 50%, 1)'
					strokeWidth='8'
				/>
				<Styled.Icon
					icon='tennessee'
					fill='hsla(31, 100%, 48%, 1)'
					stroke='hsla(360, 100%, 100%, 1)'
					strokeWidth='8'
				/> */}
				<Styled.Laptop />
				<Styled.Superhero />
				<Styled.Tennessee />
			</Styled.IconsContainer>
		</Styled.Container>
	)
}
