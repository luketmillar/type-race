import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ListTextIndent = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <rect x="16" y="2" width="16" height="2" transform="rotate(-180 16 2)" fill={stroke} />
            <rect x="16" y="8" width="6" height="2" transform="rotate(-180 16 8)" fill={stroke} />
            <rect x="2" y="8" width="2" height="2" transform="rotate(-180 2 8)" fill={stroke} />
            <rect x="16" y="14" width="6" height="2" transform="rotate(-180 16 14)" fill={stroke} />
            <rect x="2" y="14" width="2" height="2" transform="rotate(-180 2 14)" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.62465 10.2994C8.75794 10.1216 8.75793 9.87718 8.62461 9.69942L8.39964 9.39945L5.69964 5.79946C5.53395 5.57855 5.22055 5.53378 4.99964 5.69946L4.19964 6.29946C3.97872 6.46515 3.93395 6.77855 4.09964 6.99947L6.12472 9.69957C6.25804 9.87733 6.25805 10.1217 6.12476 10.2995L4.09952 13.0005C3.93386 13.2214 3.97867 13.5348 4.1996 13.7005L4.99967 14.3004C5.22061 14.4661 5.534 14.4212 5.69966 14.2003L8.39971 10.5994L8.62465 10.2994Z"
                fill={stroke}
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default ListTextIndent
