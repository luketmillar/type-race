import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignHorizontalRight = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" width="2" height="16" fill={stroke} fillOpacity="0.56" />
        <rect x="2" y="4" width="9" height="3" fill={stroke} />
        <rect x="5" y="9" width="6" height="3" fill={stroke} />
    </svg>
)

export default AlignHorizontalRight
