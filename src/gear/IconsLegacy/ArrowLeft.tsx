import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ArrowLeft = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.36291 8.70122L0.671875 7.9995L1.36298 7.29784L6.28681 2.29883L7.7117 3.70229L4.46362 6.99996L15.9995 6.99996V8.99997L4.46406 8.99996L7.71177 12.2979L6.28674 13.7012L1.36291 8.70122Z"
            fill={stroke}
        />
    </svg>
)

export default ArrowLeft
