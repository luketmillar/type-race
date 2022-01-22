import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const RoundLineJoins = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8L16 2L8 2C4.68629 2 2 4.68629 2 8L2 16L8 16L8 8L16 8Z"
            fill={stroke}
        />
    </svg>
)

export default RoundLineJoins
