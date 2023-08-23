import { styled } from 'styled-components'
import * as homeIcon from '../components/Icons.jsx'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1.5rem;
`

export const Image = styled.img`
	width: clamp(18.75rem, 12.711rem + 26.84vw, 40.625rem);
`

export const Wrapper = styled.div`
	width: 100%;
`

export const Divider = styled.hr`
	height: 0.15rem;
	background: hsla(360, 100%, 100%, 1);
	border-style: none;
	margin: 4rem 10%;
	@media (width < 40rem) {
		margin: 4rem 17.5%;
	}
`

export const IconsContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (width < 40rem) {
		width: 100%;
		flex-direction: column;
		gap: 5rem;
	}
`

const IconStyle = styled.div`
	--laptop-fill: hsla(360, 100%, 100%, 1);
	--laptop-stroke: var(--color-secondary);
	--superhero-fill: hsla(240, 100%, 50%, 1);
	--superhero-stroke: hsla(0, 100%, 50%, 1);
	--tennessee-fill: hsla(31, 100%, 48%, 1);
	--tennessee-stroke: hsla(360, 100%, 100%, 1);
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: ${(props) => props.variant === 'laptop' ? 'var(--laptop-fill)' : props.variant === 'superhero' ? 'var(--superher-fill)' : 'var(--tennessee-fill)'};
		stroke: ${(props) => props.variant === 'laptop' ? 'var(--laptop-stroke)' : props.variant === 'superhero' ? 'var(--superher-stroke)' : 'var(--tennessee-stroke)'};
		stroke-width: ${(props) => props.variant === 'laptop' ? 15 : 8};
		/* fill: hsla(360, 100%, 100%, 1); */
		/* stroke: var(--color-secondary); */
		/* stroke-width: 8; */
		/* & text {
			fill: var(--color-secondary);
		} */
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	@media (width < 40rem) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
`

export const Icon = ({ icon, ...props }) => {
	return (
		<IconStyle>
			{icon === 'laptop' ? (
				<homeIcon.Laptop variant='laptop' {...props} />
			) : icon === 'superhero' ? (
				<homeIcon.Superhero variant='superhero' {...props} />
			) : (
				<homeIcon.Tennessee variant='tennessee' {...props} />
			)}
		</IconStyle>
	)
}

export const Laptop = styled(homeIcon.Laptop)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 15;
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	@media (width < 40rem) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
`

export const Superhero = styled(homeIcon.Superhero)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: hsla(240, 100%, 50%, 1);
		stroke: hsla(0, 100%, 50%, 1);
		stroke-width: 8;
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	@media (width < 40rem) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
`

export const Tennessee = styled(homeIcon.Tennessee)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);
	cursor: grab;
	transition-property: transform, fill, stroke, stroke-width;
	transition-duration: 250ms;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: scale(1.125);
		fill: hsla(31, 100%, 48%, 1);
		stroke: hsla(360, 100%, 100%, 1);
		stroke-width: 8;
	}
	& text {
		fill: hsla(360, 100%, 100%, 1);
	}
	@media (width < 40rem) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}
`
