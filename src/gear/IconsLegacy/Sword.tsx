import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Sword = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="13.0234"
            y="0.148438"
            width="4"
            height="6.60634"
            rx="2"
            transform="rotate(45 13.0234 0.148438)"
            fill={stroke}
        />
        <rect x="7.45312" y="1.46875" width="9.99962" height="2" transform="rotate(45 7.45312 1.46875)" fill={stroke} />
        <path
            d="M9.00004 4.41425L11.5858 7L3.58574 15.0001L1.00061 15.0004L1.00093 12.4142L9.00004 4.41425Z"
            stroke={stroke}
            strokeWidth="2"
        />
    </svg>
)

export default Sword
