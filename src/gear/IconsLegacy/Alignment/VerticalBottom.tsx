import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignVerticalBottom = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="14" width="2" height="16" transform="rotate(90 16 14)" fill={stroke} fillOpacity="0.56" />
        <rect x="12" y="2" width="9" height="3" transform="rotate(90 12 2)" fill={stroke} />
        <rect x="7" y="5" width="6" height="3" transform="rotate(90 7 5)" fill={stroke} />
    </svg>
)

export default AlignVerticalBottom
