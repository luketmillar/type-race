import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Comment = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 2C11.8137 2 14.5 4.68629 14.5 8V14H8.5C5.18629 14 2.5 11.3137 2.5 8C2.5 4.68629 5.18629 2 8.5 2ZM0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8V14V16H14.5H8.5C4.08172 16 0.5 12.4183 0.5 8ZM5.5 7V5H11.5V7H5.5ZM5.5 9H9.5V11H5.5V9Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Comment
