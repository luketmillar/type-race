import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Expand = ({ size }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3L8 7L3 3" stroke="#8B8B8B" strokeWidth="2" />
        <path d="M13 8L8 12L3 8" stroke="#2F2F2F" strokeWidth="2" />
    </svg>
)

export default Expand
