import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const DistributeVertical = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="-0.000366211"
            y="15.9998"
            width="2"
            height="16"
            transform="rotate(-90 -0.000366211 15.9998)"
            fill={stroke}
            fillOpacity="0.56"
        />
        <rect
            x="-0.00012207"
            y="2.00043"
            width="2"
            height="16"
            transform="rotate(-90 -0.00012207 2.00043)"
            fill={stroke}
            fillOpacity="0.56"
        />
        <rect x="4.00037" y="9.99982" width="4" height="8" transform="rotate(-90 4.00037 9.99982)" fill={stroke} />
    </svg>
)

export default DistributeVertical
