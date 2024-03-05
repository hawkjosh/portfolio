import { useState } from 'react'

export const useHoverBind = () => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return {
        isHovered,
        bind: {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
        }
    }
}
