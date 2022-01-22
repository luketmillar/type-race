import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Image = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99999 3C6.89542 3 5.99999 3.89543 5.99999 5C5.99999 6.10457 6.89542 7 7.99999 7C9.10456 7 9.99999 6.10457 9.99999 5C9.99999 3.89543 9.10456 3 7.99999 3ZM4.60643 6.58579L5.31354 7.29289L8.33866 10.318L13.4051 5.33993L14.1121 4.6452L14.813 5.34612L25.4196 15.9527L24.0054 17.3669L14.0997 7.46125L9.75292 11.7323L15.9201 17.8995L14.5059 19.3137L4.60643 9.41421L-5.29306 19.3137L-6.70728 17.8995L3.89933 7.29289L4.60643 6.58579Z"
            fill={stroke}
        />
        <rect x="1" y="1" width="14" height="14" rx="1" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Image
