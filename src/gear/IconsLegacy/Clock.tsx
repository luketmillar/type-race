import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Clock = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z"
            stroke={stroke}
            strokeWidth="2"
        />
        <path d="M8 3C8 3 8 6.54738 8 8.5H11" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Clock
