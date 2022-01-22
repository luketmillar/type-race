import React from 'react'
interface IProps {
    size: number
    stroke: string
}
const Fullscreen = ({}: IProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="4.5" width="31" height="23" rx="0.5" stroke="#404040" />
            <path
                d="M5.00209 4.5L4.5 4.49791V5V27V27.5021L5.00205 27.5L27.002 27.41L27.5 27.4079V26.91V5.0918V4.59388L27.0021 4.5918L5.00209 4.5Z"
                fill="#A7E5FF"
                stroke="#404040"
            />
        </svg>
    )
}

export default Fullscreen
