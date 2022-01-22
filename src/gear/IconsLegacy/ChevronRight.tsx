import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ChevronRight = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 2L11 8L5 14" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default ChevronRight
