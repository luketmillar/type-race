import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const SaveState = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke={stroke} strokeWidth="2" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5213 10.1568L5.52127 10.1569L6.93548 11.5711L6.93551 11.571L6.93556 11.5711L8.34977 10.1569L8.34973 10.1568L12.5923 5.91421L11.1781 4.5L6.93551 8.74261L4.81424 6.62133L3.40002 8.03555L5.5213 10.1568Z"
                fill={stroke}
            />
        </svg>
    )
}

export default SaveState
