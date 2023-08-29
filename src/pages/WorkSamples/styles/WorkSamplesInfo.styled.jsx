import { styled } from 'styled-components'
import { breakpoints, screen } from '../../../GlobalStyle.jsx'

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.75rem 1.25rem;
	opacity: 0;
	&[data-active] {
		opacity: 1;
		z-index: 1;
	}
`

export const Title = styled.div`
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${screen.xl} {
		font-size: 2.75rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${screen.maxLg} { */
	@media ${screen.lg} {
		font-size: 2.5rem;
		@media ${screen.landscape} {
			font-size: 2rem;
		}
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${screen.maxMd} { */
	@media ${screen.md} {
		font-size: 2.25rem;
		@media ${screen.landscape} {
			font-size: 2rem;
		}
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${screen.maxSm} { */
	@media ${screen.sm} {
		font-size: 1.75rem;
	}
	@media ${screen.xs} {
		font-size: 1.75rem;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

export const Text = styled.div`
	font-weight: 200;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${screen.xl} {
		font-size: 1.625rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${screen.maxLg} { */
	@media ${screen.lg} {
		font-size: 1.5rem;
		@media ${screen.landscape} {
			font-size: 1.375rem;
		}
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${screen.maxMd} { */
	@media ${screen.md} {
		font-size: 1.375rem;
		@media ${screen.landscape} {
			font-size: 1.125rem;
		}
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${screen.maxSm} { */
	@media ${screen.sm} {
		font-size: 1.125rem;
	}
	@media ${screen.xs} {
		font-size: 1.125rem;
	}
`
