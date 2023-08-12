import React from 'react'

import { WorkSamplesLinkBtn } from './WorkSamplesLinkBtn.jsx'

import { WebAppIconBtn } from './WebAppIconBtn.jsx'
import { GithubIconBtn } from './GithubIconBtn.jsx'
import { BonusIconBtn } from './BonusIconBtn.jsx'

import { LinkWrapper } from './styles/WorkSamplesLink.styled.js'

export const WorkSamplesLink = ({ item, activeIndex }) => {
	return (
		<LinkWrapper
			data-status={item.index === activeIndex ? 'active' : 'inactive'}>
			<WorkSamplesLinkBtn
				icon={<WebAppIconBtn />}
				text='Web App'
				link={item.website}
			/>
			<WorkSamplesLinkBtn
				icon={<GithubIconBtn />}
				text='Github Repo'
				link={item.github}
			/>
			{item.bonus !== null && (
				<WorkSamplesLinkBtn
					icon={<BonusIconBtn />}
					text='Bonus'
					link={item.bonus}
				/>
			)}
		</LinkWrapper>
	)
}
