import React from 'react'
import { useTextareaScroll } from '../../hooks/useTextareaScroll.jsx'
import * as Styled from './styles/Contact.styled.js'

export const Contact = () => {
	const textareaRef = useTextareaScroll()

	return (
		<Styled.Container>
			<Styled.Title>Contact Me</Styled.Title>
			<Styled.Form
				action='https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823'
				method='POST'>
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
				<Styled.Wrapper>
					<Styled.Input
						name='name'
						type='text'
						placeholder='Full Name'
						required
					/>
					<Styled.Input
						name='email'
						type='email'
						placeholder='Email Address'
						required
					/>
				</Styled.Wrapper>
				<Styled.Textarea
					ref={textareaRef}
					name='message'
					placeholder='Your Message'
					required
				/>
				<Styled.Button type='submit'>Submit Form</Styled.Button>
			</Styled.Form>
		</Styled.Container>
	)
}
