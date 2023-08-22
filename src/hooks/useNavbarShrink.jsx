import { useEffect, useState } from 'react'

export const useNavShrink = () => {
	const [shrink, setShrink] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setShrink('')
			} else {
				setShrink('shrink')
			}
		}

		handleScroll()

		document.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return shrink
}
