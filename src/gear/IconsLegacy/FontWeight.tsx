import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const FontWeight = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5392 11.206H7.44277L6.37651 14H4L8.96988 2H11.0211L16 14H13.6145L12.5392 11.206ZM8.08434 9.52473H11.8976L9.99096 4.5467L8.08434 9.52473Z"
            fill={stroke}
        />
        <path d="M1.64088 14H0L4.60773 2H6L1.64088 14Z" fill={stroke} />
    </svg>
)

export default FontWeight
