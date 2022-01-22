import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const LetterSpacing = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <rect y="16" width="16" height="2" transform="rotate(-90 0 16)" fill={stroke} />
            <rect x="14" y="16" width="16" height="2" transform="rotate(-90 14 16)" fill={stroke} />
            <g clipPath="url(#clip1)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.79883 8.00001L3.16863 8.55471L5.16863 11.5547L6.83273 10.4453L5.20253 8.00001L6.83273 5.55471L5.16863 4.44531L3.16863 7.44531L2.79883 8.00001Z"
                    fill={stroke}
                />
                <rect x="4" y="9" width="2" height="8" transform="rotate(-90 4 9)" fill={stroke} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2012 8.00003L12.8315 7.44546L10.8315 4.44547L9.16736 5.55488L10.7977 8.0003L9.16821 10.4457L10.8326 11.5547L12.8316 8.55468L13.2012 8.00003Z"
                    fill={stroke}
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0">
                <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
            <clipPath id="clip1">
                <rect y="12" width="8" height="16" transform="rotate(-90 0 12)" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default LetterSpacing
