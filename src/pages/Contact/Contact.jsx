import React from 'react'

import { useTextareaScroll } from '../../hooks/useTextareaScroll.js'

import {
	StyledContainer,
	StyledTitle,
	StyledForm,
	StyledInputWrapper,
	StyledInput,
	StyledTextarea,
	SubmitBtn,
} from './components/styles/Contact.styled.js'

export const Contact = () => {
	const textareaRef = useTextareaScroll()

	return (
		<StyledContainer>
			<StyledTitle>Contact Me</StyledTitle>
			<StyledForm
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
				<StyledInputWrapper>
					<StyledInput
						name='name'
						type='text'
						placeholder='Full Name'
						required
					/>
					<StyledInput
						name='email'
						type='email'
						placeholder='Email Address'
						required
					/>
				</StyledInputWrapper>
				<StyledTextarea
					ref={textareaRef}
					name='message'
					placeholder='Your Message'
					required
				/>
				<SubmitBtn type='submit'>Submit Form</SubmitBtn>
			</StyledForm>
		</StyledContainer>
	)
}
