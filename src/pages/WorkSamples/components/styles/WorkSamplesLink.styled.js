import styled from 'styled-components'

const LinkWrapper = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	transition: opacity, transform, visibility;
	transition-duration: 1s;
	transition-timing-function: ease-in-out;

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(100%) scale(0);
		visibility: hidden;
	}
`

export { LinkWrapper }