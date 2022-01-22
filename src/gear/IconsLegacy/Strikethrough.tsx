import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Strikethrough = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 2H9H7H2V4V6H4V4H7V8H0V10H7V14H5V16H11V14H9V10H16V8H9V4H12V6H14V4V2Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Strikethrough
