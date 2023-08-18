import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as icon from '../components/Icons.jsx'
import { CaretLeft, CaretRight } from '@styled-icons/fa-solid'

export const MenuIcon = styled(icon.Menu)`
	display: flex;
	width: clamp(1.563rem, 0.759rem + 3.571vw, 2.188rem);
	stroke: hsla(360, 100%, 100%, 1);

	&:hover {
		stroke: var(--color-primary);
		cursor: pointer;
	}
`

export const MenuList = styled.div`
	position: absolute;
	top: ${({ $top }) => $top};
	left: 1.5rem;
	background-color: var(--color-secondary);
	border: 0.1875rem solid hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	padding: 0.5rem;
	padding-right: 1rem;
	transition: top 0.5s ease-in-out;

	${({ $shrink }) =>
		$shrink &&
		`
    top: 4.125rem;
  `}
`

export const StaticMenuList = styled(MenuList)`
	top: 4.875rem;
`

export const ListItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: clamp(1.25rem, 0.929rem + 1.429vw, 1.5rem);
	font-weight: 500;
	text-transform: uppercase;
	padding: 0.75rem 1rem;
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.15) translate(0.5rem);
		color: var(--color-primary);
	}

	${({ $active }) =>
		$active &&
		`
		font-weight: 500;
		scale: 1.15;
		&:hover {
			color: unset;
			transform: unset;
			cursor: default;
		}
  `}
`

export const ActiveIconLeft = styled(CaretLeft)`
	color: var(--color-primary);
	display: none;

	${({ $active }) =>
		$active &&
		`
	display: block;
`}
`

export const ActiveIconRight = styled(CaretRight)`
	color: var(--color-primary);
	display: none;

	${({ $active }) =>
		$active &&
		`
	display: block;
`}
`
