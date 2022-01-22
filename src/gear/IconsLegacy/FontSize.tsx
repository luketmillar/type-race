import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const FontSize = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.26958 12.3702H1.72139L1.18825 14H0L2.48494 7H3.51054L6 14H4.80723L4.26958 12.3702ZM2.04217 11.3894H3.9488L2.99548 8.48558L2.04217 11.3894Z"
            fill={stroke}
        />
        <path
            d="M12.5392 11.206H7.44277L6.37651 14H4L8.96988 2H11.0211L16 14H13.6145L12.5392 11.206ZM8.08434 9.52473H11.8976L9.99096 4.5467L8.08434 9.52473Z"
            fill={stroke}
        />
    </svg>
)

export default FontSize
