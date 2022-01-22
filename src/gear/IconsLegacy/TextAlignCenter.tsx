import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignCenter = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="2" fill={stroke} />
        <rect x="4" y="7" width="8" height="2" fill={stroke} />
        <rect y="14" width="16" height="2" fill={stroke} />
    </svg>
)

export default AlignCenter
