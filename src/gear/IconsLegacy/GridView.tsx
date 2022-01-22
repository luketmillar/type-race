import React from 'react'

interface IProps {
    size: number
    stroke: string
}

const GridView = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2H4V4H2V2ZM0 0H2H4H6V2V4V6H4H2H0V4V2V0ZM12 2H14V4H12V2ZM10 0H12H14H16V2V4V6H14H12H10V4V2V0ZM4 12H2V14H4V12ZM2 10H0V12V14V16H2H4H6V14V12V10H4H2ZM12 12H14V14H12V12ZM10 10H12H14H16V12V14V16H14H12H10V14V12V10Z"
            fill={stroke}
        />
    </svg>
)

export default GridView
