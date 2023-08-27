import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavShrink } from '../../../hooks/useNavbarShrink.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as Styled from '../styles/Menu.Styled.jsx'

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

export const Menu = () => {
	const [showMenu, setShowMenu] = useState(false)
	const shrink = useNavShrink()
	const location = useLocation()
	const staticNav = Boolean(location.pathname === '/work-samples')

	const toggleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<Styled.Menu onClick={toggleShowMenu} />
			{showMenu && (
				<Styled.List
					$top={staticNav ? '4.875rem' : '6.25rem'}
					$shrink={shrink ? 'shrink' : ''}>
					{menuItems.map((item, index) => {
						const active = item.link === location.pathname
						return (
							<Styled.Item
								key={index}
								to={item.link}
								onClick={toggleShowMenu}
								$active={active ? 'active' : ''}>
								<Styled.CaretIcon
									icon={faIcon.CaretLeft}
									size={15}
									$active={active ? 'active' : ''}
								/>
								{item.name}
								<Styled.CaretIcon
									icon={faIcon.CaretRight}
									size={15}
									$active={active ? 'active' : ''}
								/>
							</Styled.Item>
						)
					})}
				</Styled.List>
			)}
		</>
	)
}
