import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Effects = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.5 11L14.0902 12.9098H16L14.4549 14.0902L15.0451 16L13.5 14.8197L11.9549 16L12.5451 14.0902L11 12.9098H12.9098L13.5 11Z"
            fill={stroke}
        />
        <path
            d="M6.5 0L8.03444 4.58359H13L8.98278 7.41641L10.5172 12L6.5 9.16718L2.48278 12L4.01722 7.41641L0 4.58359H4.96556L6.5 0Z"
            fill={stroke}
        />
    </svg>
)

export default Effects
