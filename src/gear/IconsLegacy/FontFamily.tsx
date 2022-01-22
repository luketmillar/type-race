import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const FontFamily = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H16V2V4H14V2H9V14H11V16H9H7H5V14H7V2H2V4H0V2V0Z"
            fill={stroke}
        />
    </svg>
)

export default FontFamily
