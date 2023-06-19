import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'

const StyledLayout = styled.section`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`

export const Layout = () => {
	return (
		<StyledLayout>
			<Navbar />
			<Outlet />
			<Footer />
		</StyledLayout>
	)
}
