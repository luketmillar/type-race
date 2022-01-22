import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Size = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.6564 1.41416L1.99969 1.99957L1.41376 5.6568" stroke={stroke} strokeWidth="2" />
        <path d="M14.5858 5.6564L14.0004 1.99969L10.3432 1.41376" stroke={stroke} strokeWidth="2" />
        <path d="M10.3436 14.5858L14.0003 14.0004L14.5862 10.3432" stroke={stroke} strokeWidth="2" />
        <path d="M1.41416 10.3436L1.99957 14.0003L5.6568 14.5862" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Size
