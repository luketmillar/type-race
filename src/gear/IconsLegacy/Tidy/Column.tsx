import React from 'react'

interface IProps {
    size: number
    stroke: string
}

const TidyRow = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="15.9998"
            y="16.0001"
            width="2"
            height="16"
            transform="rotate(180 15.9998 16.0001)"
            fill={stroke}
            fillOpacity="0.56"
        />
        <rect
            x="1.99988"
            y="15.9998"
            width="2"
            height="16"
            transform="rotate(180 1.99988 15.9998)"
            fill={stroke}
            fillOpacity="0.56"
        />
        <rect x="9" y="13" width="2" height="2" transform="rotate(180 9 13)" fill={stroke} />
        <rect x="9" y="5" width="2" height="2" transform="rotate(180 9 5)" fill={stroke} />
        <rect x="9" y="9" width="2" height="2" transform="rotate(180 9 9)" fill={stroke} />
    </svg>
)

export default TidyRow
