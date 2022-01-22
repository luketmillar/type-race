import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Uppercase = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="2" fill={stroke} />
            <rect x="5" y="14" width="6" height="2" fill={stroke} />
            <rect x="2" y="4" width="2" height="2" fill={stroke} />
            <rect x="12" y="4" width="2" height="2" fill={stroke} />
            <rect x="7" y="2" width="2" height="12" fill={stroke} />
        </svg>
    )
}

export default Uppercase
