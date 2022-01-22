import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Crop = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="3" width="13" height="2" fill={stroke} />
        <rect x="5" y="11" width="11" height="2" fill={stroke} />
        <rect x="3" y="13" width="13" height="2" transform="rotate(-90 3 13)" fill={stroke} />
        <rect x="11" y="16" width="11" height="2" transform="rotate(-90 11 16)" fill={stroke} />
    </svg>
)

export default Crop
