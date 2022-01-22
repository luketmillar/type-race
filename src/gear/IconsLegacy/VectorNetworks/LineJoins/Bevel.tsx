import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const BevelLineJoins = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 2H16V8H8V16H2V7L7 2Z" fill={stroke} />
    </svg>
)

export default BevelLineJoins
