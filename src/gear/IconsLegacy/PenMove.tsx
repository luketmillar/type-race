import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const PenMove = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.06188 13.317L1.7088 1.7088L13.317 6.06188L8.60608 8.08086L8.23842 8.23842L8.08086 8.60608L6.06188 13.317Z"
            stroke={stroke}
            strokeWidth="2"
        />
    </svg>
)

export default PenMove
