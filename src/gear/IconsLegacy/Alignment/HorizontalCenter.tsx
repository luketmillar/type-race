import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignHorizontalCenter = ({ size, stroke }: IProps) => (
    <svg width={size} height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" width="2" height="16" fill={stroke} fillOpacity="0.56" />
        <rect x="2" y="4" width="12" height="3" fill={stroke} />
        <rect x="4" y="9" width="8" height="3" fill={stroke} />
    </svg>
)

export default AlignHorizontalCenter
