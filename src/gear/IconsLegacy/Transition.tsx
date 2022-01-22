import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Transition = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 8L14 4L14 12L9 8Z" fill={stroke} />
        <path d="M7 8L1.99979 12L1.99979 4L7 8Z" fill={stroke} />
    </svg>
)

export default Transition
