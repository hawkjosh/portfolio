import { useEffect, useState } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)

	const [isTablet, setIsTablet] = useState(false)

	const [isLaptop, setIsLaptop] = useState(false)

	const [isWideScreen, setIsWideScreen] = useState(false)

	const [isShortScreen, setIsShortScreen] = useState(false)

	const [isPortrait, setIsPortrait] = useState(false)

	useEffect(() => {
		const handleResizeMobile = () => {
			setIsMobile(window.innerWidth < 640)
		}

		handleResizeMobile()

		window.addEventListener('resize', handleResizeMobile)

		return () => window.removeEventListener('resize', handleResizeMobile)
	}, [])

	useEffect(() => {
		const handleResizeTablet = () => {
			setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1280)
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
		const handleResizeWideScreen = () => {
			setIsWideScreen(window.innerWidth >= 1024)
		}

		handleResizeWideScreen()

		window.addEventListener('resize', handleResizeWideScreen)

		return () => window.removeEventListener('resize', handleResizeWideScreen)
	}, [])

	useEffect(() => {
		const handleResizeShortScreen = () => {
			setIsShortScreen(window.innerHeight < 500)
		}

		handleResizeShortScreen()

		window.addEventListener('resize', handleResizeShortScreen)

		return () => window.removeEventListener('resize', handleResizeShortScreen)
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
		isWideScreen,
		isShortScreen,
		isPortrait,
	}
}
