import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const MiterLineJoins = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0003 7.99976L18.0004 1.99976L2.00033 1.99976L2.00033 3.00038L2.00026 3.00038L2.00026 18.0004L8.00026 18.0004L8.00026 7.99976L18.0003 7.99976Z"
            fill={stroke}
        />
    </svg>
)

export default MiterLineJoins
