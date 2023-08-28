import { styled } from 'styled-components'
import { breakpoints, media } from '../../../GlobalStyle.jsx'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 1rem;
`

export const Text = styled.div`
	font-weight: 700;
	color: hsla(60, 100%, 50%, 1);
	text-align: center;
	text-wrap: balance;
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 2rem;
		line-height: 2.25;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: 1.875rem;
		line-height: 2.125;
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: 1.75rem;
		line-height: 2;
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1.625rem;
		line-height: 1.875;
	}
	@media ${media.xs} {
		font-size: 1.5rem;
		line-height: 1.75;
	}
`

export const Link = styled.a`
	text-transform: uppercase;
	font-weight: 900;
	color: hsla(0, 0%, 100%, 1);
	border: 0.125rem solid hsla(0, 0%, 100%, 1);
	border-radius: 1rem;
	padding: 0.0625rem 0.375rem;
	@media ${media.noTouch} {
		transition: color, border-color;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;
	}
	&:hover {
		color: hsla(9, 100%, 64%, 1);
		border-color: hsla(60, 100%, 50%, 1);
	}
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		font-size: 2.5rem;
		line-height: 2.75;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		font-size: 2.25rem;
		line-height: 2.5;
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		font-size: 2rem;
		line-height: 2.25;
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		font-size: 1.75rem;
		line-height: 2;
	}
	@media ${media.xs} {
		font-size: 1.5rem;
		line-height: 1.75;
	}
`
