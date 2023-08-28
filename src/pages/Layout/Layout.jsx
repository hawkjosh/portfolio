import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import * as Styled from './styles/Layout.styled.jsx'

export const Layout = () => {
	return (
		<Styled.Layout>
			<Navbar />
			<Outlet />
			<Footer />
		</Styled.Layout>
	)
}
