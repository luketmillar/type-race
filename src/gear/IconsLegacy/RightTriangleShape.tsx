import React from 'react'

interface IProps {
    size: number
    stroke: string
    fill?: string
}

const RightTriangleShape = ({ size, stroke, fill = 'none' }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L1.00003 2.41421L17.5858 19H1Z" fill={fill} stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default RightTriangleShape
