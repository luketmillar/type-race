import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Circle = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="14" rx="7" stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default Circle
