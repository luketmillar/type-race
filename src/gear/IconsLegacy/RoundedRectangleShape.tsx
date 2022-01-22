import React from 'react'

interface IProps {
    size: number
    stroke: string
    fill?: string
}
const RoundedRectangleShape = ({ size, stroke, fill = 'none' }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="18" rx="3" fill={fill} stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default RoundedRectangleShape
