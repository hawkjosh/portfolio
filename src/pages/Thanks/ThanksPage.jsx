import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ThanksPage = () => {
	return (
		<PageWrapper>
			<MessageContainer>
				<TextContainer>
					<TextOne>Thanks for reaching out!</TextOne>
					<TextTwo>I'll get back to you as soon as possible.</TextTwo>
				</TextContainer>
				<ReturnBtn to='/'>Return</ReturnBtn>
			</MessageContainer>
		</PageWrapper>
	)
}

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
	align-items: center;
	gap: clamp(2rem, 0.995rem + 3.756vw, 4rem);
	background: var(--color-secondary);
	border: 0.25rem solid hsla(0, 100%, 100%, 1);
	border-radius: 2rem;
	padding: clamp(0.75rem, 0.499rem + 0.939vw, 1.25rem);
`

const TextContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: clamp(0.75rem, 0.499rem + 0.939vw, 1.25rem);
`

const TextOne = styled.div`
	font-size: clamp(1.625rem, 1.311rem + 1.174vw, 2.25rem);
	font-weight: 700;
	color: hsla(0, 100%, 100%, 1);
	text-align: center;
`

const TextTwo = styled.div`
	font-size: clamp(1rem, 0.686rem + 1.174vw, 1.625rem);
	font-weight: 500;
	color: hsla(0, 100%, 100%, 1);
	text-align: center;
`

const ReturnBtn = styled(NavLink)`
	font-size: clamp(1.5rem, 0.998rem + 1.878vw, 2.5rem);
	text-transform: uppercase;
	font-weight: 700;
	color: hsla(0, 100%, 100%, 1);
	border: 0.125rem solid hsla(0, 100%, 100%, 1);
	border-radius: 1rem;
	padding: clamp(0.25rem, 0.124rem + 0.469vw, 0.5rem)
		clamp(0.75rem, 0.499rem + 0.939vw, 1.25rem);
	transition-property: color, border-color;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		color: var(--color-primary);
		border-color: var(--color-primary);
	}
`
