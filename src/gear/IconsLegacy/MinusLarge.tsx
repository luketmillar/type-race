import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const MinusLarge = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7H14V9H2V7Z" fill={stroke} />
    </svg>
)

export default MinusLarge
