import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Query = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5ZM10.3349 11.7488C9.25989 12.5355 7.93419 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.93402 12.5356 9.25957 11.749 10.3345L15.3736 13.959C15.5688 14.1543 15.5688 14.4709 15.3736 14.6661L14.6665 15.3732C14.4712 15.5685 14.1546 15.5685 13.9593 15.3732L10.3349 11.7488Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Query
