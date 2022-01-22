import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Emoji = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke={stroke} strokeWidth="2" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8739 9H4.12598C4.57002 10.7252 6.13612 12 7.99996 12C9.8638 12 11.4299 10.7252 11.8739 9Z"
            fill={stroke}
        />
        <circle cx="6" cy="6" r="1" fill={stroke} />
        <circle cx="10" cy="6" r="1" fill={stroke} />
    </svg>
)

export default Emoji
