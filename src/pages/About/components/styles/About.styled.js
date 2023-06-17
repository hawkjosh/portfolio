import styled from 'styled-components'
import { responsive } from '../../../../GlobalStyle.js'
import { ToolboxBtnIcon } from '../ToolboxBtnIcon.jsx'
import { ResumeBtnIcon } from '../ResumeBtnIcon.jsx'

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	${responsive.tablet`
		display: inline-block;
		padding: 2rem;
		max-width: 1440px;
		margin: 0 auto;
	`}
`

const Profile = styled.img`
	object-fit: cover;
	border: 3.75px solid white;
	border-radius: 50%;
	background-color: $color-secondary;
	box-shadow: -6px 6px 7.5px 4px rgba(0, 0, 0, 0.4);
	padding: 0.5rem;
	float: none;
	margin-left: 0;
	margin-bottom: 0;
	width: clamp(16rem, 12.1rem + 16vw, 18.5rem);

	${responsive.tablet`
		width: clamp(18.5rem, 15.5rem + 7.5vw, 20rem);
		float: right;
		shape-outside: ellipse(50% 50% at 50% 50%);
		margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
		margin-bottom: 1rem;
	`}

	${responsive.laptop`
		width: 23rem;
		float: right;
		shape-outside: ellipse(50% 50% at 50% 50%);
		margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
		margin-bottom: 1rem;
	`}
`

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	${responsive.tablet`
		margin-bottom: clamp(2rem, 1.5rem + 1.25vw, 2.25rem);
	`}

	${responsive.laptop`
		margin-bottom: 2.5rem;
	`}
`

const StyledText = styled.p`
	font-size: clamp(1.125rem, 0.93rem + 0.8vw, 1.25rem);
	font-weight: 200;
	text-align: justify;
	text-justify: inter-character;
	line-height: 1.375;

	&:nth-of-type(1) {
		margin-bottom: clamp(1.75rem, 1.25rem + 1.25vw, 2.25rem);

		@media (width < 767px) {
			margin-bottom: 0;
		}
	}

	${responsive.tablet`
		font-size: clamp(1.25rem, 1rem + 0.625vw, 1.375rem);
		line-height: 1.5;
	`}

	${responsive.laptop`
		font-size: 1.5rem;
		line-height: 1.75;
	`}
`

const StyledBtnsWrapper = styled.div`
	width: 56rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1.25rem;

	${responsive.laptop`
		width: clamp(56rem, -8rem + 80vw, 64rem);
	`}
`

const ToolboxBtn = styled(ToolboxBtnIcon)`
	width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	fill: white;
	stroke: white;
	transition: transform 0.25s ease-in-out;

	&:hover {
		fill: $color-secondary;
		stroke: $color-secondary;
		cursor: pointer;
		transform: scale(1.25);
	}

	${responsive.tablet`
		width: clamp(12rem, 8rem + 10vw, 14rem);
	`}

	${responsive.laptop`
		width: 16rem;
	`}
`

const ResumeBtn = styled(ResumeBtnIcon)`
	width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	fill: white;
	stroke: white;
	transition: transform 0.25s ease-in-out;

	&:hover {
		fill: $color-secondary;
		stroke: $color-secondary;
		cursor: pointer;
		transform: scale(1.25);
	}

	${responsive.tablet`
		width: clamp(12rem, 8rem + 10vw, 14rem);
	`}

	${responsive.laptop`
		width: 16rem;
	`}
`

export {
	StyledContainer,
	Profile,
	StyledTextWrapper,
	StyledText,
	StyledBtnsWrapper,
	ToolboxBtn,
	ResumeBtn,
}
