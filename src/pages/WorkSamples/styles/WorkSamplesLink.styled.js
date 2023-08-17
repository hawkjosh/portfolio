import { styled } from 'styled-components'

export const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	opacity: 0;
	transition: opacity 500ms ease-in-out;

	&[data-active] {
		opacity: 1;
		z-index: 1;
	}
`
