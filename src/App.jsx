import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Layout } from './pages/Layout/Layout.jsx'
import { NoPage } from './pages/NoPage/NoPage.jsx'
import { Thanks } from './pages/Thanks/Thanks.jsx'
import { WorkSamples } from './pages/WorkSamples/WorkSamples.jsx'

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
					path='/thanks'
					element={<Thanks />}
				/>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</Router>
	)
}
