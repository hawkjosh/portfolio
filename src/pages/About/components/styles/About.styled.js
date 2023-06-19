import styled from 'styled-components'

import { ToolboxBtnIcon } from '../ToolboxBtnIcon.jsx'
import { ResumeBtnIcon } from '../ResumeBtnIcon.jsx'

const StyledContainer = styled.div`
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem;

	@media (width < 640px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
`

const Profile = styled.img`
	object-fit: cover;
	border: 0.25rem solid hsla(360, 100%, 100%, 1);
	border-radius: 50%;
	background-color: var(--color-secondary);
	box-shadow: -0.375rem 0.375rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.4);
	padding: 0.5rem;
	float: right;
	shape-outside: ellipse(50% 50% at 50% 50%);
	margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
	margin-bottom: 1rem;

	@media (width >= 1280px) {
		width: 23rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(20rem, 11rem + 15vw, 23rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(18.5rem, 15.5rem + 7.5vw, 20rem);
	}
	@media (width < 640px) {
		width: clamp(16rem, 12.1rem + 16vw, 18.5rem);
		float: unset;
		shape-outside: unset;
		margin-left: 0;
		margin-bottom: 0;
	}
`

const StyledTextWrapper = styled.div`
	@media (width >= 1280px) {
		margin-bottom: 2.5rem;
	}
	@media (960px <= width < 1280px) {
		margin-bottom: clamp(2.25rem, 1.5rem + 1.25vw, 2.5rem);
	}
	@media (640px <= width < 960px) {
		margin-bottom: clamp(2rem, 1.5rem + 1.25vw, 2.25rem);
	}
	@media (width < 640px) {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
`

const StyledText = styled.p`
	font-weight: 200;
	text-align: justify;
	text-justify: inter-character;

	@media (width >= 1280px) {
		font-size: 1.5rem;
		line-height: 1.75;
	}
	@media (960px <= width < 1280px) {
		font-size: clamp(1.375rem, 1rem + 0.625vw, 1.5rem);
		line-height: 1.625;
	}
	@media (640px <= width < 960px) {
		font-size: clamp(1.25rem, 1rem + 0.625vw, 1.375rem);
		line-height: 1.5;
	}
	@media (width < 640px) {
		font-size: clamp(1.125rem, 0.93rem + 0.8vw, 1.25rem);
		line-height: 1.375;
	}

	&:nth-of-type(1) {
		margin-bottom: clamp(1.75rem, 1.25rem + 1.25vw, 2.25rem);

		@media (width < 640px) {
			margin-bottom: 0;
		}
	}
`

const StyledBtnsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1.25rem;

	@media (width>= 1280px) {
		width: clamp(56rem, -8rem + 80vw, 64rem);
	}
	@media (960px <= width < 1280px) {
		width: 56rem;
	}
`

const ToolboxBtn = styled(ToolboxBtnIcon)`
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: 16rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(14rem, 8rem + 10vw, 16rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(12rem, 8rem + 10vw, 14rem);
	}
	@media (width < 640px) {
		width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	}

	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		cursor: pointer;
		transform: scale(1.25);
	}
`

const ResumeBtn = styled(ResumeBtnIcon)`
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: 16rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(14rem, 8rem + 10vw, 16rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(12rem, 8rem + 10vw, 14rem);
	}
	@media (width < 640px) {
		width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	}

	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		cursor: pointer;
		transform: scale(1.25);
	}
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
