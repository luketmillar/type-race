import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Edit = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2H2V14H14V8H16V14V16H14H2H0V14V2V0H2H8V2Z"
                    fill={stroke}
                />
                <path
                    d="M3.41424 9.64435L10.9359 2.1227L13.7643 4.95113L6.24267 12.4728L3.41429 12.4729L3.41424 9.64435Z"
                    fill={stroke}
                />
                <rect
                    x="11.6445"
                    y="1.41406"
                    width="2"
                    height="4"
                    transform="rotate(-45 11.6445 1.41406)"
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
}

export default Edit
