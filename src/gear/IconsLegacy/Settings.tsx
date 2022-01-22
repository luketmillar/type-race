import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Settings = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1H16V3H0V1ZM0 7H16V9H0V7ZM16 13H0V15H16V13Z"
            fill={stroke}
            fillOpacity="0.4"
        />
        <rect x="10" width="4" height="4" rx="2" fill={stroke} />
        <rect x="2" y="6" width="4" height="4" rx="2" fill={stroke} />
        <rect x="6" y="12" width="4" height="4" rx="2" fill={stroke} />
    </svg>
)

export default Settings
