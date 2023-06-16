import React, { useState } from 'react'

import { useNavShrink } from './hooks/useNavbarShrink.js'

import { MenuIcon, MenuList, ListItem } from './styles/Menu.styled.js'

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
		name: 'Work Samples',
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

	const toggleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<MenuIcon onClick={toggleShowMenu} />
			{showMenu && (
				<MenuList shrink={shrink ? 'shrink' : ''}>
					{menuItems.map((item, index) => (
						<ListItem
							key={index}
							to={item.link}
							onClick={toggleShowMenu}>
							{item.name}
						</ListItem>
					))}
				</MenuList>
			)}
		</>
	)
}
