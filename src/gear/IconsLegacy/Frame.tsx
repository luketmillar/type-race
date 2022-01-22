import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Frame = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V10C15 10.5523 14.5523 11 14 11H2C1.44772 11 1 10.5523 1 10V2Z"
                stroke={stroke}
                strokeWidth="2"
            />
            <rect x="7" y="11" width="2" height="5" rx="1" fill={stroke} />
            <rect x="4" y="14" width="8" height="2" fill={stroke} />
        </svg>
    )
}

export default Frame
