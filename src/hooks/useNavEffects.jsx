import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useNavEffects = () => {
	const [fixed, setFixed] = useState(false)
	const [min, setMin] = useState(false)
	const [shrink, setShrink] = useState(false)
	const location = useLocation()
	const fixedLocation = Boolean(
		location.pathname === '/work-samples' || location.pathname === '/contact'
	)

	useEffect(() => {
		const handleFixed = () => setFixed(fixedLocation)

		handleFixed()

		document.addEventListener('popstate', handleFixed)

		return () => document.removeEventListener('popstate', handleFixed)
	}, [location.pathname])

	useEffect(() => {
		const handleMin = () => setMin(window.innerWidth < 1024)

		handleMin()

		window.addEventListener('resize', handleMin)

		return () => window.removeEventListener('resize', handleMin)
	}, [])

	useEffect(() => {
		const handleShrink = () => setShrink(window.scrollY !== 0)

		handleShrink()

		document.addEventListener('scroll', handleShrink)

		return () => document.removeEventListener('scroll', handleShrink)
	}, [])

	return { fixed, min, shrink }
}
