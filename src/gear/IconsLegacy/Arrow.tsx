import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Arrow = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="7" width="10" height="2" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6751 12.6629L15.1251 8.06301L11.6752 3.46204L10.075 4.66185L11.8281 6.99989L8.00009 6.99989L8.00009 8.99989L11.9224 8.99989L10.0751 11.4629L11.6751 12.6629Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Arrow
