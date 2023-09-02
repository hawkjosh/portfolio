import styled from 'styled-components'
import { FooterComponent } from './components/FooterComponent.jsx'
import { NavbarComponent } from './components/NavbarComponent.jsx'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
	return (
		<Layout>
			<NavbarComponent />
			<Outlet />
			<FooterComponent />
		</Layout>
	)
}

// Styled-Components
const Layout = styled.div`
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`
