import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const LockClosed = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.5C12 8.22386 11.7761 8 11.5 8H4.5C4.22386 8 4 8.22386 4 8.5V13.5C4 13.7761 4.22386 14 4.5 14H11.5C11.7761 14 12 13.7761 12 13.5V8.5ZM2.5 6C2.22386 6 2 6.22386 2 6.5V15.5C2 15.7761 2.22386 16 2.5 16H13.5C13.7761 16 14 15.7761 14 15.5V6.5C14 6.22386 13.7761 6 13.5 6H2.5Z"
            fill={stroke}
        />
        <path d="M11 7.5V5C11 3.34315 9.65685 2 8 2V2C6.34315 2 5 3.34315 5 5V5V7" stroke={stroke} strokeWidth="2" />
        <rect x="7" y="10" width="2" height="2" rx="1" fill={stroke} />
    </svg>
)

export default LockClosed
