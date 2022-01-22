import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ArrowRight = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6373 7.29788L15.3281 7.99953L14.6372 8.70113L9.7134 13.7012L8.28836 12.2979L11.5369 8.99907L0.000585013 8.99907L0.000586142 6.99907L11.5364 6.99907L8.2883 3.70013L9.71346 2.29695L14.6373 7.29788Z"
            fill={stroke}
        />
    </svg>
)

export default ArrowRight
