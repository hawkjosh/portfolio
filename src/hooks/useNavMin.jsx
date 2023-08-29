import { useEffect, useState } from 'react'

export const useNavMin = () => {
	const [navMin, setNavMin] = useState(false)

	useEffect(() => {
		const handleNavMin = () => {
			setNavMin(window.innerWidth < 1024)
		}

		handleNavMin()

		window.addEventListener('resize', handleNavMin)

		return () => window.removeEventListener('resize', handleNavMin)
	}, [])

	return navMin
}
