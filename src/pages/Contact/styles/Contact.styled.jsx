import { styled } from 'styled-components'
import { breakpoints, media } from '../../../GlobalStyle.jsx'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	padding: 1rem 0 5rem;
`

export const Title = styled.div`
	font-weight: 600;
	text-transform: uppercase;
	color: var(--color-secondary);
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 2.25rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(2rem, 1rem + 1.563vw, 2.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1.75rem, 1.333rem + 1.042vw, 2rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1.75rem;
	}
	@media ${media.xs} {
		font-size: 1.75rem;
	}
`

export const Form = styled.form`
	width: 90%;
	max-width: 90rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media ${media.landscape} {
		flex-direction: row;
		gap: 1rem;
	}
`

export const Input = styled.input`
	width: 100%;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 1.25rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1rem;
	}
	@media ${media.xs} {
		font-size: 1rem;
	}
`

export const Textarea = styled.textarea`
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
	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}
	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 1.25rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1rem;
	}
	@media ${media.xs} {
		font-size: 1rem;
	}
`

export const Button = styled.div`
	text-transform: uppercase;
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
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 1.5rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: clamp(1.25rem, 0.25rem + 1.563vw, 1.5rem);
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: clamp(1rem, 0.583rem + 1.042vw, 1.25rem);
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1rem;
	}
	@media ${media.xs} {
		font-size: 1rem;
	}
`
