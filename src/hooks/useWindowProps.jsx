import { useEffect, useState } from 'react'

export const useWindowProps = () => {
	const [isWidthXs, setIsWidthXs] = useState(false)
	const [isWidthSm, setIsWidthSm] = useState(false)
	const [isWidthMd, setIsWidthMd] = useState(false)
	const [isWidthLg, setIsWidthLg] = useState(false)
	const [isWidthXl, setIsWidthXl] = useState(false)
	const [isPortrait, setIsPortrait] = useState(false)
	const [isLandscape, setIsLandscape] = useState(false)
	const [isHover, setIsHover] = useState(false)
	const [isMobilePortrait, setIsMobilePortrait] = useState(false)
	const [isMobileLandscape, setIsMobileLandscape] = useState(false)
	const [isTabletPortrait, setIsTabletPortrait] = useState(false)
	const [isTabletLandscape, setIsTabletLandscape] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)

	// Checks screen width at breakpoints
	useEffect(() => {
		const handleDeviceChecks = () => {
			const widthXs = window.innerWidth < 428
			const widthSm = window.innerWidth >= 428 && window.innerWidth < 768
			const widthMd = window.innerWidth >= 768 && window.innerWidth < 1024
			const widthLg = window.innerWidth >= 1024 && window.innerWidth < 1280
			const widthXl = window.innerWidth >= 1280
			setIsWidthXs(widthXs)
			setIsWidthSm(widthSm)
			setIsWidthMd(widthMd)
			setIsWidthLg(widthLg)
			setIsWidthXl(widthXl)
		}

		handleDeviceChecks()

		window.addEventListener('resize', handleDeviceChecks)

		return () => window.removeEventListener('resize', handleDeviceChecks)
	}, [])

	// Checks screen orientation
	useEffect(() => {
		const handleDeviceChecks = () => {
			const portraitOrientation = screen.orientation.type.includes('portrait')
			const landscapeOrientation = screen.orientation.type.includes('landscape')
			setIsPortrait(portraitOrientation)
			setIsLandscape(landscapeOrientation)
		}

		handleDeviceChecks()

		screen.orientation.addEventListener('change', handleDeviceChecks)

		return () =>
			screen.orientation.removeEventListener('change', handleDeviceChecks)
	}, [])

	// Checks pointer device for hover effects
	useEffect(() => {
		const matchMediaQuery = window.matchMedia('(hover: hover)')
		setIsHover(matchMediaQuery.matches)

		const handleChange = (e) => {
			setIsHover(e.matches)
		}

		matchMediaQuery.addEventListener('change', handleChange)

		return () => matchMediaQuery.removeEventListener('change', handleChange)
	}, [])

	// Checks specific parameters for my iPhone, iPad Mini, iPad Air, and laptops
	useEffect(() => {
		const handleDeviceChecks = () => {
			const aspectRatio = window.innerWidth / window.innerHeight
			const mobilePortrait = window.innerWidth < 768 && aspectRatio <= 0.75
			const mobileLandscape = window.innerWidth <= 832 && aspectRatio >= 2
			const tabletPortrait =
				window.innerWidth >= 768 &&
				window.innerWidth < 1280 &&
				aspectRatio <= 0.9
			const tabletLandscape =
				window.innerWidth > 832 &&
				window.innerWidth < 1280 &&
				aspectRatio >= 1.5
			const laptop = window.innerWidth >= 1280
			setIsMobilePortrait(mobilePortrait)
			setIsMobileLandscape(mobileLandscape)
			setIsTabletPortrait(tabletPortrait)
			setIsTabletLandscape(tabletLandscape)
			setIsLaptop(laptop)
		}

		handleDeviceChecks()

		window.addEventListener('resize', handleDeviceChecks)

		return () => window.removeEventListener('resize', handleDeviceChecks)
	}, [])

	return {
		isWidthXs,
		isWidthSm,
		isWidthMd,
		isWidthLg,
		isWidthXl,
		isPortrait,
		isLandscape,
		isHover,
		isMobilePortrait,
		isMobileLandscape,
		isTabletPortrait,
		isTabletLandscape,
		isLaptop,
	}
}
