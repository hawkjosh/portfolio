import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`

export const Text = styled.div`
	font-size: 2rem;
	font-weight: 700;
	color: hsla(60, 100%, 50%, 1);
`

export const Link = styled.a`
	text-transform: uppercase;
	font-size: 2.25rem;
	font-weight: 900;
	color: hsla(0, 0%, 100%, 1);
	padding: 0.0625rem 0.375rem;
	border: 0.125rem solid hsla(0, 0%, 100%, 1);
	border-radius: 1rem;
	transition: color, border-color;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		color: hsla(9, 100%, 64%, 1);
		border-color: hsla(60, 100%, 50%, 1);
	}
`
