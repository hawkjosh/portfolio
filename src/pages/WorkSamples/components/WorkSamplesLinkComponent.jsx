import styled from 'styled-components'
import { WorkSamplesLinkBtnComponent } from './WorkSamplesLinkBtnComponent.jsx'
import * as faIcon from '@styled-icons/fa-solid'
import * as simpleIcon from '@styled-icons/simple-icons'

export const WorkSamplesLinkComponent = ({ item, activeIndex }) => {
	return (
		<ComponentWrapper data-active={item.index === activeIndex ? true : null}>
			<WorkSamplesLinkBtnComponent
				icon={<faIcon.Globe />}
				text='Web App'
				link={item.website}
			/>
			<WorkSamplesLinkBtnComponent
				icon={<simpleIcon.Github />}
				text='Github Repo'
				link={item.github}
			/>
			{item.bonus !== null && (
				<WorkSamplesLinkBtnComponent
					icon={<faIcon.Gift />}
					text='Bonus'
					link={item.bonus}
				/>
			)}
		</ComponentWrapper>
	)
}

// Styled-Components
const ComponentWrapper = styled.div`
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
