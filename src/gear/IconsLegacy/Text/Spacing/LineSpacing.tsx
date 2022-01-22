import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const LineSpacing = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <rect width="16" height="2" fill={stroke} />
            <rect y="14" width="16" height="2" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99999 2.79883L7.44529 3.16863L4.44529 5.16863L5.55469 6.83273L7.99999 5.20253L10.4453 6.83273L11.5547 5.16863L8.55469 3.16863L7.99999 2.79883Z"
                fill={stroke}
            />
            <rect x="7" y="4" width="2" height="8" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99997 13.2012L8.55454 12.8315L11.5545 10.8315L10.4451 9.16736L7.9997 10.7977L5.55434 9.16821L4.44531 10.8326L7.44532 12.8316L7.99997 13.2012Z"
                fill={stroke}
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default LineSpacing
