import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Pen = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0989 3.17111L2 0L0 2L3.17111 13.0989C3.66174 14.8161 5.23128 16 7.01721 16L12 16C14.2091 16 16 14.2091 16 12V7.01721C16 5.23128 14.8161 3.66174 13.0989 3.17111ZM5.09416 12.5494L2.67773 4.09194L7.06774 8.48196C7.02356 8.64718 7 8.82084 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C8.82084 7 8.64718 7.02356 8.48196 7.06774L4.09194 2.67773L12.5494 5.09416C13.408 5.33947 14 6.12425 14 7.01721V12C14 13.1046 13.1046 14 12 14H7.01721C6.12425 14 5.33947 13.408 5.09416 12.5494Z"
            fill={stroke}
        />
    </svg>
)

export default Pen
