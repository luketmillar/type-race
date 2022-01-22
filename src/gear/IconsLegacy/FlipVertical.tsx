import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const FlipVertical = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="0" width="2" height="5" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="2" y="0" width="2" height="5" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="4" y="0" width="8" height="2" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="0" y="7" width="16" height="2" transform="rotate(0 0 0)" fill={stroke} />
        <rect x="12" y="11" width="2" height="5" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
        <rect x="2" y="11" width="2" height="5" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
        <rect x="4" y="14" width="8" height="2" transform="rotate(0 0 0)" fill={stroke} fillOpacity={0.5} />
    </svg>
)

export default FlipVertical
