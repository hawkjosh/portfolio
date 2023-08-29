import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useStaticNav = () => {
	const [staticNav, setStaticNav] = useState('')
	const location = useLocation()
	const staticNavLocation = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	useEffect(() => {
		const checkStatic = () => {
			if (staticNavLocation) {
				setStaticNav('static')
			} else {
				setStaticNav('')
			}
		}

		checkStatic()

		document.addEventListener('popstate', checkStatic)

		return () => {
			document.removeEventListener('popstate', checkStatic)
		}
	}, [location.pathname])

	return staticNav
}
