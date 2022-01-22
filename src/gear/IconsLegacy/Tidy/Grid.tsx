import React from 'react'

interface IProps {
    size: number
    stroke: string
}

const TidyRow = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="16" width="2" height="12" transform="rotate(-90 2 16)" fill={stroke} fillOpacity="0.56" />
        <rect x="2" y="2" width="2" height="12" transform="rotate(-90 2 2)" fill={stroke} fillOpacity="0.56" />
        <rect x="5" y="7" width="2" height="2" transform="rotate(-90 5 7)" fill={stroke} />
        <rect x="9" y="7" width="2" height="2" transform="rotate(-90 9 7)" fill={stroke} />
        <rect x="5" y="11" width="2" height="2" transform="rotate(-90 5 11)" fill={stroke} />
        <rect x="9" y="11" width="2" height="2" transform="rotate(-90 9 11)" fill={stroke} />
        <rect x="16" y="16" width="2" height="16" transform="rotate(180 16 16)" fill={stroke} fillOpacity="0.56" />
        <rect x="2" y="16" width="2" height="16" transform="rotate(180 2 16)" fill={stroke} fillOpacity="0.56" />
    </svg>
)
export default TidyRow
