import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'
import { useNavEffects } from '../../../hooks/useNavEffects.jsx'
import * as faIcon from '@styled-icons/fa-solid'

const menuItems = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'About',
		link: '/about',
	},
	{
		name: 'My Work',
		link: '/work-samples',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
]

export const MenuComponent = () => {
	const [showMenu, setShowMenu] = useState(false)
	const location = useLocation()
	const { fixed, shrink } = useNavEffects()

	const toggleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<ComponentWrapper>
			<Menu onClick={toggleShowMenu} />
			{showMenu && (
				<List $top={fixed || shrink ? '4.125rem' : '6.25rem'}>
					{menuItems.map((item, index) => {
						const active = item.link === location.pathname
						return (
							<Item
								key={index}
								to={item.link}
								onClick={toggleShowMenu}>
								<CaretIcon
									icon={faIcon.CaretLeft}
									size={15}
									$active={active && 'block'}
								/>
								{item.name}
								<CaretIcon
									icon={faIcon.CaretRight}
									size={15}
									$active={active && 'block'}
								/>
							</Item>
						)
					})}
				</List>
			)}
		</ComponentWrapper>
	)
}

// Styled-Components
const ComponentWrapper = styled.div`
	display: block;
`

const Menu = styled(faIcon.Bars)`
	display: flex;
	width: clamp(1.563rem, 0.759rem + 3.571vw, 2.188rem);
	color: hsla(360, 100%, 100%, 1);
	&:hover {
		color: var(--color-primary);
		cursor: pointer;
	}
`

const List = styled.div`
	position: absolute;
	top: ${(props) => props.$top};
	left: 1.5rem;
	background: var(--color-secondary);
	border: 0.1875rem solid hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	padding: 0.5rem;
	padding-right: 1rem;
	transition: top 250ms ease-in-out;
`

const Item = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: clamp(1.25rem, 0.929rem + 1.429vw, 1.5rem);
	font-weight: 500;
	text-transform: uppercase;
	padding: 0.75rem 1rem;
	transition: transform 250ms ease;
	&:hover {
		transform: scale(1.15) translate(0.5rem);
		color: var(--color-primary);
	}
	&.active {
		font-weight: 700;
		cursor: default;
		&:hover {
			color: unset;
			transform: unset;
		}
	}
`

const CaretIcon = styled(({ icon: IconComponent, ...rest }) => (
	<IconComponent {...rest} />
))`
	display: ${(props) => props.$active || 'none'};
	color: var(--color-primary);
`
