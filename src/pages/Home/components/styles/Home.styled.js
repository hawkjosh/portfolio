import styled from 'styled-components'
import { responsive } from '../../../../GlobalStyle.js'
import { LaptopIcon } from '../LaptopIcon.jsx'
import { SuperheroIcon } from '../SuperheroIcon.jsx'
import { TennesseeIcon } from '../TennesseeIcon.jsx'

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1.5rem;
`

const Avatar = styled.img`
	width: clamp(18.75rem, 12.711rem + 26.84vw, 40.625rem);
`

const StyledDividerWrapper = styled.div`
	width: 100%;
`

const StyledDivider = styled.hr`
	height: 0.15rem;
	background-color: hsla(0, 0%, 100%, 1);
	border-style: none;
	margin: 4rem 17.5%;

	${responsive.tablet`
    margin: 4rem 10%;
  `}
`

const StyledIcons = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	${responsive.tablet`
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    // gap: 0
  `}
`

const Laptop = styled(LaptopIcon)`
	width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	fill: var(--color-secondary);

	& text {
		fill: hsla(0, 0%, 100%, 1);
	}

	&:hover {
		fill: hsla(0, 0%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 15;
		cursor: grab;
	}

	${responsive.tablet`
    width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
  `}
`

const Superhero = styled(SuperheroIcon)`
	width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	fill: var(--color-secondary);

	& text {
		fill: hsla(0, 0%, 100%, 1);
	}

	&:hover {
		fill: blue;
		stroke: red;
		stroke-width: 7;
		cursor: grab;
	}

	${responsive.tablet`
    width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
  `}
`

const Tennessee = styled(TennesseeIcon)`
	width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	fill: var(--color-secondary);

	& text {
		fill: hsla(0, 0%, 100%, 1);
	}

	&:hover {
		fill: hsla(31, 100%, 48%, 1);
		stroke: hsla(0, 0%, 100%, 1);
		stroke-width: 8;
		cursor: grab;
	}

	${responsive.tablet`
    width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
  `}
`

export {
	StyledContainer,
	Avatar,
	StyledDividerWrapper,
	StyledDivider,
	StyledIcons,
	Laptop,
	Superhero,
	Tennessee,
}
