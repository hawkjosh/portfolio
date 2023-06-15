import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { Navbar } from './components/Navbar.jsx'
import { NavbarStatic } from './components/NavbarStatic.jsx'
import { Footer } from './components/Footer.jsx'

const StyledLayout = styled.section`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`

export const Layout = () => {
	const location = useLocation()

	return (
		<StyledLayout>
			{location.pathname === '/work-samples' ? <NavbarStatic /> : <Navbar />}
			<Outlet />
			<Footer />
		</StyledLayout>
	)
}
