import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppLayout } from './pages/Layout/AppLayout.jsx'
import { AboutPage } from './pages/About/AboutPage.jsx'
import { ContactPage } from './pages/Contact/ContactPage.jsx'
import { HomePage } from './pages/Home/HomePage.jsx'
import { NoPage } from './pages/NoPage/NoPage.jsx'
import { ThanksPage } from './pages/Thanks/ThanksPage.jsx'
import { WorkSamplesPage } from './pages/WorkSamples/WorkSamplesPage.jsx'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<AppLayout />}>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='/about'
						element={<AboutPage />}
					/>
					<Route
						path='/work-samples'
						element={<WorkSamplesPage />}
					/>
					<Route
						path='/contact'
						element={<ContactPage />}
					/>
				</Route>
				<Route
					path='/thanks'
					element={<ThanksPage />}
				/>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</Router>
	)
}
