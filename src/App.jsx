import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './pages/Layout/Layout.jsx'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { WorkSamples } from './pages/WorkSamples/WorkSamples.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { NoPage } from './pages/NoPage/NoPage.jsx'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/work-samples'
						element={<WorkSamples />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
				</Route>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</Router>
	)
}
