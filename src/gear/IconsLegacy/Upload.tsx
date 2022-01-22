import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Upload = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.29883 4.36331L8.00056 3.67227L8.70222 4.36338L13.7012 9.28721L12.2978 10.7121L9.00009 7.46401L9.00009 15.9999L7.00009 15.9999L7.00009 7.46446L3.70213 10.7122L2.29882 9.28714L7.29883 4.36331Z"
            fill={stroke}
        />
        <rect x="16" y="2" width="16" height="2" transform="rotate(-180 16 2)" fill={stroke} />
    </svg>
)

export default Upload
