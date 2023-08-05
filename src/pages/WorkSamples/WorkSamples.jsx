import React, { useState } from 'react'

import { WorkSamplesInfo } from './components/WorkSamplesInfo.jsx'
import { WorkSamplesLink } from './components/WorkSamplesLink.jsx'

import {
	StyledContainer,
	ImageSection,
	Image,
	InfoSection,
	LinkSection,
	NavSection,
	ArrowIconWrapper,
	LeftArrow,
	RightArrow,
} from './components/styles/WorkSamples.styled.js'

import noteTaker from './images/note_taker.png'
import weatherDashboard from './images/weather_dashboard.png'
import workdayScheduler from './images/workday_scheduler.png'
import courseTracker from './images/course_tracker.png'
import miniGames from './images/mini_games.png'
import songSearch from './images/song_search.png'
import commentForum from './images/comment_forum.png'

const items = [
	{
		index: 0,
		image: noteTaker,
		alt: 'Note Taker Image',
		title: 'Note Taker',
		info: `A clean, crisp, and very usefuly note-taking app that uses localStorage to save and retrieve note data. BONUS: Check out an alternate version of this app at the link below that uses an express.js backend to save and retrieve notes from a JSON file.`,
		website: 'https://hawkjosh-note-taker.netlify.app/',
		github: 'https://github.com/hawkjosh/note-taker-json',
		bonus: 'https://hawkjosh-note-taker.onrender.com',
	},
	{
		index: 1,
		image: weatherDashboard,
		alt: 'Weather Dashboard Image',
		title: 'Weather Dashboard',
		info: `A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the WeatherAPI developer API.`,
		website: 'https://hawkjosh-weather-dashboard.onrender.com',
		github: 'https://github.com/hawkjosh/weather-dashboard-update',
		bonus: null,
	},
	{
		index: 2,
		image: workdayScheduler,
		alt: 'Workday Scheduler Image',
		title: 'Workday Scheduler',
		info: `A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.`,
		website: 'https://hawkjosh-workday-scheduler.netlify.app/',
		github: 'https://github.com/hawkjosh/workday-scheduler-update',
		bonus: null,
	},
	{
		index: 3,
		image: courseTracker,
		alt: 'Course Tracker Image',
		title: 'Course Tracker',
		info: `A somewhat niche but very useful app that keeps track of online developer courses that you have purchased or have your eye on purchasing. It uses Netlify Functions to connect with an Airtable database where the user's information is stored.`,
		website: 'https://hawkjosh-course-tracker.netlify.app',
		github: 'https://github.com/hawkjosh/course-tracker',
		bonus: null,
	},
	{
		index: 4,
		image: miniGames,
		alt: 'Mini Games Image',
		title: 'Mini Games',
		info: `A fun and entertaining way to kill some time, this app is a collection of some classic games built with the basics - HTML, CSS, and JavaScript.`,
		website: 'https://hawkjosh-mini-games.netlify.app',
		github: 'https://github.com/hawkjosh/mini-games',
		bonus: null,
	},
	{
		index: 5,
		image: songSearch,
		alt: 'Song Search Image',
		title: 'Song Search',
		info: `A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.`,
		website: 'https://hawkjosh-song-search.onrender.com',
		github: 'https://github.com/hawkjosh/song-search-update',
		bonus: null,
	},
	{
		index: 6,
		image: commentForum,
		alt: 'Comment Forum Image',
		title: 'Comment Forum',
		info: `An efficient and polished full-stack comment forum app, complete with user authentication and utilizing Jinja2 on the client-side for templating. The server-side is built with Python and Flask, leveraging sqlAlchemy as the ORM to communicate with a MySQL database for runtime API's.`,
		website: 'https://hawkjosh.pythonanywhere.com',
		github: 'https://github.com/hawkjosh/python-flask',
		bonus: null,
	},
]

export const WorkSamples = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = items.length - 1
		} else if (newIndex >= items.length) {
			newIndex = 0
		}

		setActiveIndex(newIndex)
	}

	const handleLeftClick = () => {
		updateIndex(activeIndex - 1)
	}

	const handleRightClick = () => {
		updateIndex(activeIndex + 1)
	}

	return (
		<StyledContainer>
			<ImageSection>
				{items.map((item) => {
					return (
						<Image
							key={item.index}
							data-status={item.index === activeIndex ? 'active' : 'inactive'}
							style={{ backgroundImage: `url(${item.image})` }}
						/>
					)
				})}
			</ImageSection>

			<InfoSection>
				{items.map((item) => {
					return (
						<WorkSamplesInfo
							key={item.index}
							item={item}
							activeIndex={activeIndex}
						/>
					)
				})}
			</InfoSection>

			<LinkSection>
				{items.map((item) => {
					return (
						<WorkSamplesLink
							key={item.index}
							item={item}
							activeIndex={activeIndex}
						/>
					)
				})}
			</LinkSection>

			<NavSection>
				<ArrowIconWrapper onClick={handleLeftClick}>
					<LeftArrow />
				</ArrowIconWrapper>

				<ArrowIconWrapper onClick={handleRightClick}>
					<RightArrow />
				</ArrowIconWrapper>
			</NavSection>
		</StyledContainer>
	)
}
