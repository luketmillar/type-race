import React from 'react'

interface IProps {
    size: number
    stroke: string
    fill?: string
}
const ThumbLarge = ({ size, stroke, fill = '#ffffff' }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
        />
    </svg>
)

export default ThumbLarge
