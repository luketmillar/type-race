import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Blur = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="16" fill={stroke} />
            <rect x="5" width="2" height="16" fill={stroke} fillOpacity={2 / 3} />
            <rect x="11" width="4" height="16" fill={stroke} fillOpacity={1 / 3} />
        </svg>
    )
}

export default Blur
