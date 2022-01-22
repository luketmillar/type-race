import React from 'react'

interface IProps {
    size: number
    stroke: string
    fill?: string
}
const TriangleShape = ({ size, stroke, fill = 'none' }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.51556L18.2768 19H1.72318L10 4.51556Z" fill={fill} stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default TriangleShape
