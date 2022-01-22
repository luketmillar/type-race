import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const List = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <rect x="6" y="13" width="10" height="2" fill={stroke} />
            <rect y="13" width="2" height="2" fill={stroke} />
            <rect x="6" y="7" width="6" height="2" fill={stroke} />
            <rect y="7" width="2" height="2" fill={stroke} />
            <rect x="6" y="1" width="10" height="2" fill={stroke} />
            <rect y="1" width="2" height="2" fill={stroke} />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default List
