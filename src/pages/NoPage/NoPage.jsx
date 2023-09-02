import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NoPage = () => {
	return (
		<PageWrapper>
			<MessageContainer>
				<Text>Uh oh, looks like something went wrong! Sorry about that.</Text>
				<ReturnBtn to='/'>Return</ReturnBtn>
			</MessageContainer>
		</PageWrapper>
	)
}

// Styled-Components
const PageWrapper = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100vh;
	display: flex;
	align-items: center;
	margin: auto;
	padding: clamp(0.75rem, -0.38rem + 4.225vw, 3rem);
`

const MessageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: clamp(1.5rem, 0.244rem + 4.695vw, 4rem);
	background: hsla(0, 0%, 100%, 1);
	border: 0.25rem solid hsla(9, 100%, 64%, 1);
	border-radius: 2rem;
	padding: clamp(0.75rem, 0.499rem + 0.939vw, 1.25rem);
`

const Text = styled.div`
	font-size: clamp(1.5rem, 1.249rem + 0.939vw, 2rem);
	font-weight: 700;
	color: hsla(9, 100%, 64%, 1);
	text-align: center;
	text-wrap: balance;
`

const ReturnBtn = styled(NavLink)`
	font-size: clamp(1.5rem, 0.998rem + 1.878vw, 2.5rem);
	text-transform: uppercase;
	font-weight: 700;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	filter: contrast(10%);
	border-radius: 1rem;
	padding: clamp(0.25rem, 0.124rem + 0.469vw, 0.5rem)
		clamp(0.75rem, 0.499rem + 0.939vw, 1.25rem);
	transition: filter 250ms ease-in-out;
	&:hover {
		filter: contrast(100%);
	}
`
