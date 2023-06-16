import React from 'react'

export const NavMenuIcon = ({ ...props }) => {
	return (
		<svg
			{...props}
			fill='none'
			strokeWidth='15'
			strokeLinecap='round'
			strokeLinejoin='round'
			viewBox='0 0 100 100'>
			<path d='M-10 -10H110V110H-10V-10ZM10 10H90ZM10 50H90ZM10 90H90Z' />
		</svg>
	)
}
