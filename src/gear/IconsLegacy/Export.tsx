import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Export = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.70122 11.6367L7.9995 12.3277L7.29784 11.6366L2.29883 6.71276L3.70229 5.28787L6.99996 8.53596L6.99996 2.26827e-05L8.99996 2.25953e-05L8.99996 8.53551L12.2979 5.2878L13.7012 6.71283L8.70122 11.6367Z"
                fill={stroke}
            />
            <rect y="14" width="16" height="2" fill={stroke} />
        </svg>
    )
}

export default Export
