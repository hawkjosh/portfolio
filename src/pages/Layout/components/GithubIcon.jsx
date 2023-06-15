import React from 'react'

export const GithubIcon = ({ ...props }) => {
	return (
		<a
			href='https://github.com/hawkjosh'
			target='_blank'
			rel='noreferrer'>
			<svg
				{...props}
				fill='none'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
				viewBox='0 0 110 110'>
				<path d='M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80' />
			</svg>
		</a>
	)
}
