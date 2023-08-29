import { styled } from 'styled-components'
import { breakpoints, media } from '../../../GlobalStyle.jsx'

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border: none;
	border-radius: 1rem;
	background: transparent;
	font-size: 0;
	color: hsla(360, 100%, 100%, 1);
	transition-property: background, border-radius, color, font-size, width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	z-index: 1;
	&:hover {
		color: hsla(360, 100%, 100%, 1);
	}
	& svg {
		color: var(--color-secondary);
		transition-property: transform, color;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;
		/* @media (width >= ${breakpoints.xl}) { */
		@media ${media.xl} {
			width: 3rem;
		}
		/* @media (width < ${breakpoints.xl}) { */
		/* @media ${media.maxLg} { */
		@media ${media.lg} {
			width: 2.75rem;
			@media ${media.landscape} {
				width: 2rem;
			}
		}
		/* @media (width < ${breakpoints.lg}) { */
		/* @media ${media.maxMd} { */
		@media ${media.md} {
			width: 2.5rem;
			@media ${media.landscape} {
				width: 1.5rem;
			}
		}
		/* @media (width < ${breakpoints.md}) { */
		/* @media ${media.maxSm} { */
		@media ${media.sm} {
			width: 2rem;
		}
		@media ${media.xs} {
			width: 2rem;
		}
	}
	&[data-expand] {
		border-radius: 2rem;
		background: var(--color-secondary);
		& svg {
			color: hsla(360, 100%, 100%, 1);
			transform: scale(0.75);
		}
		/* @media (width >= ${breakpoints.xl}) { */
		@media ${media.xl} {
			width: 12rem;
			font-size: 1.25rem;
		}
		/* @media (width < ${breakpoints.xl}) { */
		/* @media ${media.maxLg} { */
		@media ${media.lg} {
			width: 11rem;
			font-size: 1.125rem;
			@media ${media.landscape} {
				width: 10rem;
				font-size: 1rem;
			}
		}
		/* @media (width < ${breakpoints.lg}) { */
		/* @media ${media.maxMd} { */
		@media ${media.md} {
			width: 10rem;
			font-size: 1rem;
			@media ${media.landscape} {
				width: 9rem;
				font-size: 0.875rem;
			}
		}
		/* @media (width < ${breakpoints.md}) { */
		/* @media ${media.maxSm} { */
		@media ${media.sm} {
			width: 9rem;
			font-size: 0.875rem;
			@media ${media.landscape} {
			}
		}
		@media ${media.xs} {
			width: 9rem;
			font-size: 0.875rem;
			@media ${media.landscape} {
			}
		}
	}
	/* @media (width >= ${breakpoints.xl}) { */
	@media ${media.xl} {
		width: 3rem;
		height: 3.5rem;
	}
	/* @media (width < ${breakpoints.xl}) { */
	/* @media ${media.maxLg} { */
	@media ${media.lg} {
		width: 2.75;
		height: 3.25rem;
		@media ${media.landscape} {
			width: 2rem;
			height: 2.5rem;
		}
	}
	/* @media (width < ${breakpoints.lg}) { */
	/* @media ${media.maxMd} { */
	@media ${media.md} {
		width: 2.5rem;
		height: 3rem;
		@media ${media.landscape} {
			width: 1.5rem;
			height: 2rem;
		}
	}
	/* @media (width < ${breakpoints.md}) { */
	/* @media ${media.maxSm} { */
	@media ${media.sm} {
		width: 2rem;
		height: 2.5rem;
	}
	@media ${media.xs} {
		width: 2rem;
		height: 2.5rem;
	}
`

export const Text = styled.div`
	font-size: inherit;
	color: inherit;
`
