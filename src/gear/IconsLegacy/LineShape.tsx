import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const LineShape = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4287 0.0547021L0 18.4834L1.41421 19.8976L19.8429 1.46892L18.4287 0.0547021Z" fill={stroke} />
        </svg>
    )
}

export default LineShape
