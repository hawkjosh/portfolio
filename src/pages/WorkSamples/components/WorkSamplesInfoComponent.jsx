import styled from 'styled-components'
import { screen } from '../../../GlobalStyle'

export const WorkSamplesInfoComponent = ({ item, activeIndex }) => {
	return (
		<ComponentWrapper data-active={item.index === activeIndex ? true : null}>
			<Title>{item.title}</Title>
			{item.index === 0 ? (
				<TextContainer>
					<Text>{item.info}</Text>
					<Text>
						<strong>BONUS</strong>: Check out an alternate version of this app
						at the link below that uses an express.js backend to save and
						retrieve notes from a JSON file.
					</Text>
				</TextContainer>
			) : (
				<Text>{item.info}</Text>
			)}
		</ComponentWrapper>
	)
}

// Styled-Components
const ComponentWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0.75rem 1.25rem;
	opacity: 0;
	&[data-active] {
		opacity: 1;
		z-index: 1;
	}
	@media ${screen.landscape} {
		gap: 0.75rem;
	}
`

const Title = styled.div`
	font-size: clamp(1.75rem, 1.248rem + 1.878vw, 2.75rem);
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	@media ${screen.landscape} {
		font-size: clamp(1.5rem, 0rem + 3.125vw, 2.5rem);
	}
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

const Text = styled.div`
	font-size: 1.125rem;
	font-size: clamp(1.125rem, 0.874rem + 0.939vw, 1.625rem);
	font-weight: 200;
	@media ${screen.landscape} {
		font-size: clamp(1rem, 0.25rem + 1.563vw, 1.5rem);
	}
`
