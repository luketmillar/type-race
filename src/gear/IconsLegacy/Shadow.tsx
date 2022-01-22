import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Shadow = ({ size }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="11" height="11" rx="2" fill="#8B8B8B" opacity={5 / 29} />
        <path
            d="M1 3C1 1.89543 1.89543 1 3 1H9C10.1046 1 11 1.89543 11 3V9C11 10.1046 10.1046 11 9 11H3C1.89543 11 1 10.1046 1 9V3Z"
            stroke="#8B8B8B"
            strokeWidth="2"
        />
    </svg>
)

export default Shadow
