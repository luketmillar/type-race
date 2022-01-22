import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ArrowDown = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7026 9.71288L7.99999 15.3275L2.29835 9.71282L3.70166 8.28779L7.00044 11.5363L7.00044 -2.9296e-07L9.00044 -2.05537e-07L9.00044 11.5358L12.2994 8.28772L13.7026 9.71288Z"
            fill={stroke}
        />
    </svg>
)

export default ArrowDown
