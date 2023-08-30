const resumeInfo = {
	path: 'M9 26v-18h12l5 5v13h-17zm12-18v5h5m-14 0h6m-6 4.5h11m-11 4.5h11Z',
	text: 'My Resume',
}
const toolboxInfo = {
	path: 'M10.1 13.9c.9-.7 1.7-.2 2.7 1 .1.1.3 0 .4-.1.1-.1 1.5-1.3 1.5-1.4.1-.1.1-.2 0-.3a36.2 36.2 0 01-.7-1c-1.8-2.4 4.9-4 3.9-4-.5 0-2.6 0-3 0-1.3.1-2.9 1.3-3.7 1.9-1.1.7-1.5 1.2-1.5 1.2-.3.3 0 .9-.6 1.3-.6.5-.9.1-1.3.4-.2.1-.6.5-.8.6-.1.1-.2.3 0 .5 0 0 1.3 1.4 1.4 1.5.1.1.4.2.6.1.2-.2.6-.6.7-.6.1-.1-.1-.9.4-1.2zm5.7.5c-.1-.1-.3-.1-.4 0l-1.4 1.3a.3.3 0 000 .4l8.3 9.4c.2.2.5.2.8.1l1-.8a.5.5 0 00.1-.8l-8.2-9.5zm11.1-4c-.1-.5-.3-.4-.5-.2-.1.2-.7 1.1-1 1.5-.2.4-.8 1.2-1.9.4-1.1-.8-.7-1.4-.5-1.8.2-.4.8-1.5.9-1.6.1-.1 0-.5-.4-.4-.4.2-2.5 1-2.8 2.3-.3 1.3.3 2.4-.8 3.5l-1.3 1.4 1.3 1.6 1.7-1.6c.4-.4 1.2-.8 2-.6 1.6.4 2.5-.2 3.1-1.3.5-.9.4-2.8.3-3.3zm-17.2 13.7a.5.5 0 000 .8l1 .9c.2.2.5.1.7-.1l4.9-4.8-1.5-1.7-5.1 4.9Z',
	text: 'My Toolbox',
}

export const AboutIcon = ({ type, ...props }) => {
	return (
		<svg
			viewBox='0 0 112 40'
			{...props}>
			<path
				fill={type === 'resume' ? 'transparent' : null}
				stroke={type === 'toolbox' ? 'transparent' : null}
				d={type === 'toolbox' ? toolboxInfo.path : resumeInfo.path}
			/>
			<text
				stroke='transparent'
				fontSize='0.75rem'
				x='32'
				y='21'>
				{type === 'toolbox' ? toolboxInfo.text : resumeInfo.text}
			</text>
			<rect
				fill='transparent'
				width='100'
				height='30'
				x='2.5'
				y='2'
				rx='7.5'
				ry='7.5'
			/>
		</svg>
	)
}
