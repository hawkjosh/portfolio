import React from 'react'

export const ResumeBtnIcon = ({ ...props }) => {
	return (
		<svg
			fill='currentColor'
			stroke='currentColor'
			viewBox='-7 -7 105 33'
			{...props}>
			<path
				fill='transparent'
				d='M2 19v-18h12l5 5v13h-17zM14 1v5h5M5 6h6M5 10.5h11M5 15h11'
			/>
			<text
				stroke='transparent'
				fontSize='12px'
				x='25'
				y='13.75'>
				My Resume
			</text>
			<rect
				fill='transparent'
				width='100'
				height='29'
				x='-4.5'
				y='-5'
				rx='7.5'
				ry='7.5'
			/>
		</svg>
	)
}
