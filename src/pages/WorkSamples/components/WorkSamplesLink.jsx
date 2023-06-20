import React from 'react'

import { NavLink } from 'react-router-dom'

import { WorkSamplesLinkBtn } from './WorkSamplesLinkBtn.jsx'
import { WebAppIconBtn } from './WebAppIconBtn.jsx'
import { GithubIconBtn } from './GithubIconBtn.jsx'
import { BonusIconBtn } from './BonusIconBtn.jsx'

import { LinkWrapper } from './styles/WorkSamplesLink.styled.js'

export const WorkSamplesLink = ({ item, activeIndex }) => {
	return (
		<LinkWrapper
			data-status={item.index === activeIndex ? 'active' : 'inactive'}>
			<NavLink
				to={item.website}
				target='_blank'
				rel='noreferrer'>
				<WorkSamplesLinkBtn
					icon={<WebAppIconBtn />}
					text='Web App'
				/>
			</NavLink>
			<NavLink
				to={item.github}
				target='_blank'
				rel='noreferrer'>
				<WorkSamplesLinkBtn
					icon={<GithubIconBtn />}
					text='Github Repo'
				/>
			</NavLink>
			{item.bonus !== null && (
				<NavLink
					to={item.bonus}
					target='_blank'
					rel='noreferrer'>
					<WorkSamplesLinkBtn
						icon={<BonusIconBtn />}
						text='Bonus'
					/>
				</NavLink>
			)}
		</LinkWrapper>
	)
}
