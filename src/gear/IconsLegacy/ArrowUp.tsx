import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ArrowUp = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.29855 1.36329L8.00021 0.672455L8.7018 1.36335L13.7018 6.28718L12.2985 7.71222L8.99975 4.46371L8.99974 16L6.99974 16L6.99974 4.4642L3.7008 7.71228L2.29762 6.28712L7.29855 1.36329Z"
            fill={stroke}
        />
    </svg>
)

export default ArrowUp
