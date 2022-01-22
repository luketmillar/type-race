import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Underline = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="14" width="16" height="2" fill={stroke} />
            <rect x="3" y="10" width="10" height="2" fill={stroke} />
            <rect x="3" y="2" width="2" height="8" fill={stroke} />
            <rect x="11" y="2" width="2" height="8" fill={stroke} />
        </svg>
    )
}

export default Underline
