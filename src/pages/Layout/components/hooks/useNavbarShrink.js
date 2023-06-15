import { useEffect, useRef, useState } from 'react'

export const useNavShrink = () => {
	const navRef = useRef(null)
	const [shrink, setShrink] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setShrink(false)
			} else {
				setShrink(true)
			}
		}

		handleScroll()
		document.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return [navRef, shrink]
}
