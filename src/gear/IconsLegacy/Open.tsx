import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Open = ({ size, stroke }: IProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(1, -1)"
    >
        <path d="M3 13L8 9L13 13" stroke="black" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M3 8L8 4L13 8" stroke={stroke} strokeWidth="2" />
    </svg>
)
export default Open
