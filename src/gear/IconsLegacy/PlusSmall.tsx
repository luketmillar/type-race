import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const PlusSmall = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 9C6.77614 9 7 9.22386 7 9.5V11.5C7 11.7761 7.22386 12 7.5 12H8.5C8.77614 12 9 11.7761 9 11.5V9.5C9 9.22386 9.22386 9 9.5 9H11.5C11.7761 9 12 8.77614 12 8.5V7.5C12 7.22386 11.7761 7 11.5 7H9.5C9.22386 7 9 6.77614 9 6.5V4.5C9 4.22386 8.77614 4 8.5 4H7.5C7.22386 4 7 4.22386 7 4.5V6.5C7 6.77614 6.77614 7 6.5 7H4.5C4.22386 7 4 7.22386 4 7.5V8.5C4 8.77614 4.22386 9 4.5 9H6.5Z"
            fill={stroke}
        />
    </svg>
)

export default PlusSmall
