import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const More = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="2" height="2" fill={stroke} />
        <rect x="7" y="7" width="2" height="2" fill={stroke} />
        <rect x="12" y="7" width="2" height="2" fill={stroke} />
    </svg>
)

export default More
