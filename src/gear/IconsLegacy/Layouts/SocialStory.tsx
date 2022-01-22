import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const SocialStory = ({}: IProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                x="7.5"
                y="31.3652"
                width="30.7333"
                height="16"
                rx="1.5"
                transform="rotate(-90 7.5 31.3652)"
                stroke="#404040"
            />
            <rect x="7.5" y="4.5" width="16" height="23" fill="#A7E5FF" stroke="#404040" />
        </svg>
    )
}

export default SocialStory
