import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignVerticalCenter = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="9" width="2" height="16" transform="rotate(-90 0 9)" fill={stroke} fillOpacity="0.56" />
        <rect x="4" y="14" width="12" height="3" transform="rotate(-90 4 14)" fill={stroke} />
        <rect x="9" y="12" width="8" height="3" transform="rotate(-90 9 12)" fill={stroke} />
    </svg>
)

export default AlignVerticalCenter
