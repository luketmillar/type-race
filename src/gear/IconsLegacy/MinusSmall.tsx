import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const MinusSmall = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="8" height="2" rx="0.5" fill={stroke} />
    </svg>
)

export default MinusSmall
