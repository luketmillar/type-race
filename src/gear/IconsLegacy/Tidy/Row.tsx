import React from 'react'

interface IProps {
    size: number
    stroke: string
}

const TidyRow = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="9" width="2" height="2" transform="rotate(-90 3 9)" fill={stroke} />
        <rect x="11" y="9" width="2" height="2" transform="rotate(-90 11 9)" fill={stroke} />
        <rect x="7" y="9" width="2" height="2" transform="rotate(-90 7 9)" fill={stroke} />
        <rect y="16" width="2" height="16" transform="rotate(-90 0 16)" fill={stroke} fillOpacity="0.56" />
        <rect y="2" width="2" height="16" transform="rotate(-90 0 2)" fill={stroke} fillOpacity="0.56" />
    </svg>
)

export default TidyRow
