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
		info: `Introducing a sleek and highly practical note-taking application — where cleanliness and efficiency unite. This app utilizes localStorage to effortlessly store and retrieve crucial note data, demonstrating my knack for creating user-friendly solutions that seamlessly integrate functionality and style.`,
		website: 'https://hawkjosh-note-taker.netlify.app/',
		github: 'https://github.com/hawkjosh/note-taker-json',
		bonus: 'https://hawkjosh-note-taker.onrender.com',
	},
	{
		index: 1,
		image: weatherDashboard,
		alt: 'Weather Dashboard Image',
		title: 'Weather Dashboard',
		info: `Discover my innovative weather widget application — a browser-based marvel that seamlessly fetches real-time and forecasted weather data, as well as geolocation information. Through efficient fetch calls to the WeatherAPI developer API, this app showcases my ability to craft dynamic solutions that bring essential data to users with ease.`,
		website: 'https://hawkjosh-weather-dashboard.onrender.com',
		github: 'https://github.com/hawkjosh/weather-dashboard-update',
		bonus: null,
	},
	{
		index: 2,
		image: workdayScheduler,
		alt: 'Workday Scheduler Image',
		title: 'Workday Scheduler',
		info: `Experience the elegance of a user-friendly calendar/planner application designed for the browser. This dynamic app boasts real-time updates to both HTML and CSS through the power of jQuery, showcasing my proficiency in crafting intuitive solutions that enhance user interactions.`,
		website: 'https://hawkjosh-workday-scheduler.netlify.app/',
		github: 'https://github.com/hawkjosh/workday-scheduler-update',
		bonus: null,
	},
	{
		index: 3,
		image: courseTracker,
		alt: 'Course Tracker Image',
		title: 'Course Tracker',
		info: `Explore an innovative and highly practical application tailored to a specific audience — online developer course enthusiasts. This app serves as a valuable tool for tracking purchased courses and those on your radar. By harnessing the capabilities of Netlify Functions, it seamlessly interfaces with an Airtable database to provide a serverless platform that ensures your data is securely stored and easily accessible for a streamlined user experience.`,
		website: 'https://hawkjosh-course-tracker.netlify.app',
		github: 'https://github.com/hawkjosh/course-tracker',
		bonus: null,
	},
	{
		index: 4,
		image: miniGames,
		alt: 'Mini Games Image',
		title: 'Mini Games',
		info: `Indulge in a delightful and engaging pastime with this app — an assembly of timeless classic games crafted using the fundamental building blocks of HTML, CSS, and JavaScript. Experience the nostalgia and pure enjoyment as you dive into these beloved games, brought to life in an accessible and interactive format.`,
		website: 'https://hawkjosh-mini-games.netlify.app',
		github: 'https://github.com/hawkjosh/mini-games',
		bonus: null,
	},
	{
		index: 5,
		image: songSearch,
		alt: 'Song Search Image',
		title: 'Song Search',
		info: `Discover a compact yet potent music search tool that harnesses the capabilities of third-party APIs to seamlessly fetch song information through RESTful CRUD routes. Experience the efficiency of this application as it effortlessly brings you detailed musical insights at your fingertips.`,
		website: 'https://hawkjosh-song-search.onrender.com',
		github: 'https://github.com/hawkjosh/song-search-update',
		bonus: null,
	},
	{
		index: 6,
		image: commentForum,
		alt: 'Comment Forum Image',
		title: 'Comment Forum',
		info: `Explore a sleek and streamlined full-stack comment forum application, featuring robust user authentication. This app employs Jinja2 for client-side templating, creating a seamless and intuitive user interface. On the server side, Python and Flask work in harmony, while sqlAlchemy serves as the ORM to facilitate communication with a MySQL database, ensuring dynamic API functionality throughout runtime.`,
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
