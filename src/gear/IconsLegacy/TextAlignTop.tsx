import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignTop = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.69882 7.5999C3.53313 7.37899 3.5779 7.06559 3.79882 6.8999L7.69877 3.97493C7.87653 3.84161 8.12095 3.84159 8.29872 3.97489L12.1997 6.89988C12.4206 7.06554 12.4654 7.37893 12.2998 7.59987L11.6998 8.39994C11.5342 8.62087 11.2208 8.66568 10.9999 8.50002L9.80005 7.60038C9.47042 7.35323 9.00009 7.58842 9.00009 8.00042L9.00009 15.5C9.00009 15.7761 8.77623 16 8.50009 16L7.50009 16C7.22395 16 7.00009 15.7761 7.00009 15.5L7.00009 7.99894C7.00009 7.58692 6.52971 7.35173 6.20009 7.59894L4.99882 8.4999C4.77791 8.66558 4.4645 8.62081 4.29882 8.3999L3.69882 7.5999Z"
            fill={stroke}
        />
        <rect x="16" y="2" width="16" height="2" transform="rotate(-180 16 2)" fill={stroke} />
    </svg>
)

export default AlignTop
