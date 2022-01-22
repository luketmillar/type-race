import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ExpandCollapse = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10.5L8 14.5L3 10.5" stroke={stroke} strokeWidth="2" />
        <path d="M3 5.5L8 1.5L13 5.5" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default ExpandCollapse
