import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Shape = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 15V2.41421L13.5858 15H1Z" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Shape
