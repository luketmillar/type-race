import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Tweet = ({}: IProps) => {
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
            <rect x="7.63379" y="5.29883" width="15.7333" height="7.8" fill="#A7E5FF" stroke="#404040" />
        </svg>
    )
}

export default Tweet
