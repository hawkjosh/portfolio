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
					value='https://hawks-nest.netlify.app/thanks'
				/>
				<Wrapper>
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
				</Wrapper>
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
	padding: 1rem 2rem 5rem;
	@media ${screen.mobileLandscape} {
		padding: 0.5rem;
		padding-bottom: 4rem;
	}
`

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	@media ${screen.mobileLandscape} {
		display: grid;
		grid-template-columns: 25% 75%;
		grid-template-rows: auto;
		gap: 0.5rem;
		width: 95%;
		margin: auto;
	}
`

const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: clamp(1.75rem, 1.499rem + 0.939vw, 2.25rem);
	font-weight: 600;
	text-transform: uppercase;
	color: var(--color-secondary);
	@media ${screen.mobileLandscape} {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		font-size: 1.5rem;
	}
`

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media ${screen.landscape} {
		flex-direction: row;
	}
	@media ${screen.mobileLandscape} {
		gap: 0.5rem;
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
`

const Input = styled.input`
	width: 100%;
	font-size: clamp(1rem, 0.874rem + 0.469vw, 1.25rem);
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	&:is(:hover, :focus) {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
	@media ${screen.mobileLandscape} {
		font-size: 0.875rem;
	}
`

const Textarea = styled.textarea`
	width: 100%;
	height: 100%;
	font-size: clamp(1rem, 0.874rem + 0.469vw, 1.25rem);
	font-family: inherit;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	resize: none;
	&:is(:hover, :focus) {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
	@media ${screen.mobileLandscape} {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		font-size: 0.875rem;
	}
`

const Button = styled.div`
	width: max-content;
	margin: auto;
	text-transform: uppercase;
	font-size: clamp(1rem, 0.749rem + 0.939vw, 1.5rem);
	line-height: 1.5;
	color: hsla(360, 100%, 100%, 1);
	background: var(--color-secondary);
	border: 0.125rem solid hsla(360, 100%, 100%, 1);
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	&:is(:hover, :focus) {
		outline: none;
		transition: box-shadow 250ms ease-in-out;
		box-shadow: 0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5);
	}
	@media ${screen.mobileLandscape} {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		font-size: 0.875rem;
	}
`
