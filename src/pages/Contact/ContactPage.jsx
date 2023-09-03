import styled from 'styled-components'
import { screen } from '../../GlobalStyle.jsx'

export const ContactPage = () => {
	return (
		<PageWrapper>
			<Form
				action='https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823'
				method='POST'>
				<Title>Contact Me</Title>
				<input
					type='hidden'
					name='_captcha'
					value='false'
				/>
				<input
					type='hidden'
					name='_next'
					value='https://hawkjosh.com/thanks'
				/>
				<InputContainer>
					<Input
						name='name'
						type='text'
						placeholder='Full Name'
						required
					/>
					<Input
						name='email'
						type='email'
						placeholder='Email Address'
						required
					/>
				</InputContainer>
				<Textarea
					name='message'
					placeholder='Your Message'
					required
				/>
				<Button type='submit'>Submit Form</Button>
			</Form>
		</PageWrapper>
	)
}

// Styled-Components
const PageWrapper = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	margin: auto;
	padding: 1rem clamp(1rem, 0.498rem + 1.878vw, 2rem) 4rem;
`

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: auto auto 1fr;
	place-items: end;
	row-gap: clamp(0.75rem, -0.719rem + 6.386vh, 3.5rem);
`

const Title = styled.div`
	grid-column: 1 / 4;
	grid-row: 1 / 2;
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: clamp(1.25rem, 0.622rem + 2.347vw, 2.5rem);
	display: flex;
	place-items: center;
	font-weight: 600;
	text-transform: uppercase;
	color: var(--color-secondary);
`

const Button = styled.div`
	grid-column: 3 / 5;
	grid-row: 1 / 2;
	place-self: end;
	width: max-content;
	text-transform: uppercase;
	text-align: center;
	font-size: clamp(0.875rem, 0.561rem + 1.174vw, 1.5rem);
	line-height: clamp(1rem, 0.686rem + 1.174vw, 1.625rem);
	color: hsla(360, 100%, 100%, 1);
	background: var(--color-secondary);
	border: 0.125rem solid hsla(360, 100%, 100%, 1);
	border-radius: 0.75rem;
	padding: 0.375rem 0.75rem;
	padding: 0.75rem 1.5rem;
	padding: clamp(0.375rem, 0.187rem + 0.704vw, 0.75rem)
		clamp(0.75rem, 0.373rem + 1.408vw, 1.5rem);
	cursor: pointer;
	&:is(:hover, :focus) {
		outline: none;
		transition: box-shadow 250ms ease-in-out;
		box-shadow: 0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5);
	}
`

const InputContainer = styled.div`
	grid-column: 1 / 5;
	grid-row: 2 / 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: clamp(0.75rem, -0.375rem + 2.344vw, 1.5rem);
	@media ${screen.landscape} {
		flex-direction: row;
	}
`

const Input = styled.input`
	width: 100%;
	font-size: clamp(0.875rem, 0.687rem + 0.704vw, 1.25rem);
	line-height: clamp(1.125rem, 0.811rem + 1.174vw, 1.75rem);
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: clamp(0.375rem, 0.312rem + 0.235vw, 0.5rem)
		clamp(0.75rem, 0.624rem + 0.469vw, 1rem);
	&:is(:hover, :focus) {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`

const Textarea = styled.textarea`
	width: 100%;
	height: 100%;
	grid-column: 1 / 5;
	grid-row: 3 / 4;
	font-family: inherit;
	font-size: clamp(0.875rem, 0.687rem + 0.704vw, 1.25rem);
	line-height: clamp(1.125rem, 0.811rem + 1.174vw, 1.75rem);
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: clamp(0.375rem, 0.312rem + 0.235vw, 0.5rem)
		clamp(0.75rem, 0.624rem + 0.469vw, 1rem);
	resize: none;
	&:is(:hover, :focus) {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`
