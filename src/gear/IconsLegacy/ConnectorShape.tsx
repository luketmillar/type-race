import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ConnectorShape = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9343 11.7031L2 11.7031L2 13.7031L15.9343 13.7031L15.9343 11.7031Z" fill={stroke} />
            <path d="M2 1L2 13L4 13L4 1L2 1Z" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3124 12.0009L19.9999 12.7026L19.3123 13.4042L14.4116 18.4042L12.9933 17.001L16.2265 13.7021L4.74438 13.7021L4.74438 11.7021L16.226 11.7021L12.9932 8.40318L14.4117 7L19.3124 12.0009Z"
                fill={stroke}
            />
        </svg>
    )
}

export default ConnectorShape
