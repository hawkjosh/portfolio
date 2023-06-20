import styled from 'styled-components'

const LinkWrapper = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 1rem;
	transition: all 1s ease;

	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			@media (height < 500px) {
				flex-direction: column;
				padding-bottom: 0;
			}
		}
	}

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
