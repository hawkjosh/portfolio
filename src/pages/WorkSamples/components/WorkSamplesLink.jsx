import React from 'react'
import { WorkSamplesLinkBtn } from './WorkSamplesLinkBtn.jsx'
import { Gift, Globe } from '@styled-icons/fa-solid'
import { Github } from '@styled-icons/simple-icons'
import * as Styled from '../styles/WorkSamplesLink.styled.jsx'

export const WorkSamplesLink = ({ item, activeIndex }) => {
	return (
		<Styled.Wrapper data-active={item.index === activeIndex ? true : null}>
			<WorkSamplesLinkBtn
				icon={<Globe />}
				text='Web App'
				link={item.website}
			/>
			<WorkSamplesLinkBtn
				icon={<Github />}
				text='Github Repo'
				link={item.github}
			/>
			{item.bonus !== null && (
				<WorkSamplesLinkBtn
					icon={<Gift />}
					text='Bonus'
					link={item.bonus}
				/>
			)}
		</Styled.Wrapper>
	)
}
