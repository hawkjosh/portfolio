import { useEffect, useState } from 'react'

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(false)

	const [isTablet, setIsTablet] = useState(false)

	const [isLaptop, setIsLaptop] = useState(false)

	const [isWideScreen, setIsWideScreen] = useState(false)

	const [isShortScreen, setIsShortScreen] = useState(false)

	const [isPortrait, setIsPortrait] = useState(false)

	const [isHover, setIsHover] = useState(false)

	const [isMobilePortrait, setIsMobilePortrait] = useState(false)
	const [isMobileLandscape, setIsMobileLandscape] = useState(false)
	const [isTabletPortrait, setIsTabletPortrait] = useState(false)
	const [isTabletLandscape, setIsTabletLandscape] = useState(false)

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
			setIsPortrait(screen.orientation.type.includes('portrait'))
		}

		handleOrientationChange()

		screen.orientation.addEventListener('change', handleOrientationChange)

		return () =>
			screen.orientation.removeEventListener('change', handleOrientationChange)
	}, [])

	useEffect(() => {
		const matchMediaQuery = window.matchMedia('(hover: hover)')
		setIsHover(matchMediaQuery.matches)

		const handleChange = (e) => {
			setIsHover(e.matches)
		}

		matchMediaQuery.addEventListener('change', handleChange)

		return () => matchMediaQuery.removeEventListener('change', handleChange)
	}, [])

	useEffect(() => {
		const handleMobileChecks = () => {
			const aspectRatio = window.innerWidth / window.innerHeight
			const mobilePortrait = window.innerWidth < 768 && aspectRatio <= 0.75
			const mobileLandscape = window.innerWidth < 848 && aspectRatio >= 2
			setIsMobilePortrait(mobilePortrait)
			setIsMobileLandscape(mobileLandscape)
		}

		handleMobileChecks()

		window.addEventListener('resize', handleMobileChecks)

		return () => window.removeEventListener('resize', handleMobileChecks)
	}, [])

	return {
		isMobile,
		isTablet,
		isLaptop,
		isWideScreen,
		isShortScreen,
		isPortrait,
		isHover,
		isMobilePortrait,
		isMobileLandscape,
	}
}
