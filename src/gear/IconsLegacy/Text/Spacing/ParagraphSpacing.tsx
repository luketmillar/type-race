import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ParagraphSpacing = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="2" height="6" fill={stroke} />
        <path d="M5 4H14V6H5V4Z" fill={stroke} />
        <path d="M5 8H7V10H5V8Z" fill={stroke} />
        <rect x="6" y="6" width="2" height="6" fill={stroke} />
        <path d="M5 5C5 5 3 5 3 7C3 9 5 9 5 9" stroke={stroke} strokeWidth="2" />
        <rect width="16" height="2" fill={stroke} />
        <rect y="14" width="16" height="2" fill={stroke} />
    </svg>
)

export default ParagraphSpacing
