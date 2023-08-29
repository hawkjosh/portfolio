import styled from 'styled-components'
import { Footer } from './components/Footer.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
	return (
		<Layout>
			<Navbar />
			<Outlet />
			<Footer />
		</Layout>
	)
}

// Styled-Components
const Layout = styled.div`
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`
