import styled from 'styled-components'

const StyledContainer = styled.div`
	/* height: 100%;
	max-height: calc(100dvh - 10rem); */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	padding: 1rem 0;
`

const StyledTitle = styled.h1`
	font-weight: 600;
	text-transform: uppercase;
	color: var(--color-secondary);

	@media (width >= 1280px) {
		font-size: 2.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(2rem, 1rem + 1.563vw, 2.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.75rem, 1.333rem + 1.042vw, 2rem);
	}
	@media (width < 640px) {
		font-size: 1.75rem;
	}
`

const StyledForm = styled.form`
	width: 90%;
	max-width: 90rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`

const StyledInputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (orientation: landscape) {
		flex-direction: row;
		gap: 0.5rem;
	}
`

const StyledInput = styled.input`
	width: 100%;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;

	@media (width >= 1280px) {
		font-size: 1.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}

	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`

const StyledTextarea = styled.textarea`
	width: 100%;
	height: 100%;
	min-height: 25vh;
	justify-self: stretch;
	font-family: inherit;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	resize: none;

	@media (width >= 1280px) {
		font-size: 1.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}

	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`

const SubmitBtn = styled.button`
	text-transform: uppercase;
	line-height: 1.5;
	color: hsla(360, 100%, 100%, 1);
	background-color: var(--color-secondary);
	border: 0.125rem solid hsla(360, 100%, 100%, 1);
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	cursor: pointer;

	@media (width >= 1280px) {
		font-size: 1.5rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.25rem, 0.25rem + 1.563vw, 1.5rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.583rem + 1.042vw, 1.25rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:is(:hover, :focus) {
		outline: none;
		transition: box-shadow 0.25s ease-in-out;
		box-shadow: 0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5);
	}
`

export {
	StyledContainer,
	StyledTitle,
	StyledForm,
	StyledInputWrapper,
	StyledInput,
	StyledTextarea,
	SubmitBtn,
}
