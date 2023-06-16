import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)
	const [isPortrait, setIsPortrait] = useState(false)

	useEffect(() => {
		const handleResizeMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		handleResizeMobile()
		window.addEventListener('resize', handleResizeMobile)
		return () => window.removeEventListener('resize', handleResizeMobile)
	}, [])

	useEffect(() => {
		const handleResizeTablet = () => {
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280)
		}
		handleResizeTablet()
		window.addEventListener('resize', handleResizeTablet)
		return () => window.removeEventListener('resize', handleResizeTablet)
	}, [])

	useEffect(() => {
		const handleResizeLaptop = () => {
			setIsLaptop(window.innerWidth >= 1280)
		}
		handleResizeLaptop()
		window.addEventListener('resize', handleResizeLaptop)
		return () => window.removeEventListener('resize', handleResizeLaptop)
	}, [])

	useEffect(() => {
		const handleOrientationChange = () => {
			setIsPortrait(window.innerWidth < window.innerHeight)
		}
		handleOrientationChange()
		window.addEventListener('orientationchange', handleOrientationChange)
		return () =>
			window.removeEventListener('orientationchange', handleOrientationChange)
	}, [])

	return {
		isMobile,
		isTablet,
		isLaptop,
		isPortrait,
	}
}
