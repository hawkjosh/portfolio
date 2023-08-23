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

// const IconStyle = styled.div`
// 	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
// 	fill: var(--color-secondary);
// 	cursor: grab;
// 	&:hover {
// 		fill: ${({fill}) => fill};
// 		stroke: ${({stroke}) => stroke};
// 		stroke-width: ${({strokeWidth}) => strokeWidth};
// 	}
// 	& text {
// 		fill: hsla(360, 100%, 100%, 1);
// 	}
// 	@media (width < 40rem) {
// 		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
// 	}
// `

// export const Icon = ({ icon, hoverfill, ...props }) => {
// 	return (
// 		<IconStyle>
// 			{icon === 'laptop' ? (
// 				<homeIcon.Laptop hoverfill={hoverfill} {...props} />
// 			) : icon === 'superhero' ? (
// 				<homeIcon.Superhero {...props} />
// 			) : (
// 				<homeIcon.Tennessee {...props} />
// 			)}
// 		</IconStyle>
// 	)
// }

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
