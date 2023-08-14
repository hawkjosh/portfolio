import { useEffect, useRef } from 'react'

export const useTextareaScroll = () => {
	const textareaRef = useRef(null)

	useEffect(() => {
		const textarea = textareaRef.current

		if (!textarea) {
			return
		}

		const handleInput = () => {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
		}

		textarea.addEventListener('input', handleInput)

		return () => {
			textarea.removeEventListener('input', handleInput)
		}
	}, [])

	return textareaRef
}
