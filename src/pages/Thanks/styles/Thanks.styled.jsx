import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
`

export const TextOne = styled.div`
	font-size: 1.625rem;
	font-weight: 700;
`

export const TextTwo = styled.div`
	font-size: 1.0625rem;
	font-weight: 400;
`

export const Button = styled(NavLink)`
	background: hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	cursor: pointer;
	font-size: 1.5rem;
	color: var(--color-primary);
	padding: 0.5rem 0.75rem;
	line-height: 1.5;
	text-transform: uppercase;
	font-weight: 500;
`
