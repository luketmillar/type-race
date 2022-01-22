import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const DistributeHorizontal = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="16" fill={stroke} fillOpacity="0.56" />
        <rect x="14" width="2" height="16" fill={stroke} fillOpacity="0.56" />
        <rect x="6" y="4" width="4" height="8" fill={stroke} />
    </svg>
)

export default DistributeHorizontal
