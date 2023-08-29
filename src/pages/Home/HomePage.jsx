import styled from 'styled-components'
import { breakpoints, screen } from '../../GlobalStyle.jsx'
import { HomeIcon } from './components/Home.icons.jsx'

export const HomePage = () => {
	return (
		<PageWrapper>
			<Avatar
				src='/avatar.svg'
				alt='My Avatar'
			/>
			<Divider />
			<IconsContainer>
				<Icon type='laptop' />
				<Icon type='superhero' />
				<Icon type='tennessee' />
			</IconsContainer>
		</PageWrapper>
	)
}

// Styled-Components
const PageWrapper = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 6rem;
`

const Avatar = styled.img`
	width: clamp(18.75rem, 9.331rem + 35.211vw, 37.5rem);
`

const Divider = styled.hr`
	width: 100%;
	max-width: 65%;
	height: 0.15625rem;
	background: hsla(360, 100%, 100%, 1);
	border-style: none;
	margin: 4rem 17.5%;
	/* @media (width >= ${breakpoints.md}) { */
	@media ${screen.minSm} {
		max-width: 80%;
		margin: 4rem 10%;
	}
`

const IconsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	/* @media (width >= ${breakpoints.md}) { */
	@media ${screen.minSm} {
		width: 90%;
		flex-direction: row;
		justify-content: space-evenly;
		gap: unset;
	}
`

const Icon = styled(HomeIcon)`
	width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: ${(props) =>
			props.type === 'laptop'
				? 'hsla(360, 100%, 100%, 1)'
				: props.type === 'superhero'
				? 'hsla(240, 100%, 50%, 1)'
				: props.type === 'tennessee'
				? 'hsla(31, 100%, 48%, 1)'
				: 'var(--color-secondary)'};
		stroke: ${(props) =>
			props.type === 'laptop'
				? 'var(--color-secondary)'
				: props.type === 'superhero'
				? 'hsla(0, 100%, 50%, 1)'
				: props.type === 'tennessee'
				? 'hsla(360, 100%, 100%, 1)'
				: 'none'};
		stroke-width: ${(props) => (props.type === 'laptop' ? 15 : 8)};
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	/* @media (width >= ${breakpoints.md}) { */
	@media ${screen.minSm} {
		width: clamp(9.375rem, 6.235rem + 11.737vw, 15.625rem);
	}
`
