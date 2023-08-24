import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import * as styled from './styles/Layout.styled.jsx'

export const Layout = () => {
	return (
		<styled.Layout>
			<Navbar />
			<Outlet />
			<Footer />
		</styled.Layout>
	)
}
