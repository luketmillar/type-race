import React from 'react'

interface IProps {
    size: number
    stroke: string
    fill?: string
}
const RhombusShape = ({ size, stroke, fill = 'none' }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.29232 19L5.95899 1H18.7077L14.041 19H1.29232Z" fill={fill} stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default RhombusShape
