import React from 'react'

export const NavLogoIcon = ({ ...props }) => {
	return (
		<svg
			{...props}
			strokeWidth='5'
			viewBox='0 0 110 110'>
			<path d='M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z' />
		</svg>
	)
}
