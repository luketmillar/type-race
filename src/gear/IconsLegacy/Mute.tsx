import React from 'react'

interface IProps {
    size: number
    stroke: string
}
export const Mute = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58579 6.00002C4.851 6.00002 5.10536 5.89467 5.29289 5.70713L10.2929 0.70713C10.9229 0.0771648 12 0.523331 12 1.41424V20.5858C12 21.4767 10.9229 21.9229 10.2929 21.2929L5.29289 16.2929C5.10536 16.1054 4.851 16 4.58579 16H1C0.447715 16 0 15.5523 0 15V11V7.00002C0 6.44774 0.447715 6.00002 1 6.00002H4.58579Z"
            fill={stroke}
        />
        <line
            x1="15.4644"
            y1="7.46448"
            x2="22.5355"
            y2="14.5355"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <line
            x1="15.4645"
            y1="14.5356"
            x2="22.5355"
            y2="7.46449"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
)

export const Unmute = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58579 6.00002C4.851 6.00002 5.10536 5.89467 5.29289 5.70713L10.2929 0.70713C10.9229 0.0771648 12 0.523331 12 1.41424V20.5858C12 21.4767 10.9229 21.9229 10.2929 21.2929L5.29289 16.2929C5.10536 16.1054 4.851 16 4.58579 16H1C0.447715 16 -6.58375e-09 15.5523 0 15L4.76837e-08 11L0 7.00002C-6.58375e-09 6.44774 0.447715 6.00002 1 6.00002H4.58579Z"
            fill={stroke}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2.05554V4.99899C21.2558 6.67048 22 8.74832 22 11C22 13.2516 21.2558 15.3295 20 17.0009V19.9444C22.455 17.7471 24 14.554 24 11C24 7.44597 22.455 4.25282 20 2.05554Z"
            fill={stroke}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 11V14.4649C15.1956 13.7733 16 12.4806 16 11C16 9.51946 15.1956 8.22678 14 7.53516V11Z"
            fill={stroke}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 17.9298C18.3912 16.5466 20 13.9612 20 11.0001C20 8.03893 18.3912 5.45355 16 4.07031V6.52784C17.2275 7.62648 18 9.22306 18 11.0001C18 12.7771 17.2275 14.3736 16 15.4723V17.9298Z"
            fill={stroke}
        />
    </svg>
)
