import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const FlipHorizontal = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="12" width="5" height="2" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="0" y="2" width="5" height="2" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="0" y="4" width="2" height="8" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="7" y="0" width="2" height="16" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="11" y="12" width="5" height="2" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
        <rect x="11" y="2" width="5" height="2" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
        <rect x="14" y="4" width="2" height="8" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
    </svg>
)

export default FlipHorizontal
