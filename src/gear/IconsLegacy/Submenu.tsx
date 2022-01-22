import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Submenu = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3.5L10.25 8L5.75 12.5" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Submenu
