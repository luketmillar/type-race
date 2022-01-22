import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const EmptyComment = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34 18V34H18C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18ZM0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18V34V36H34H18C8.05888 36 0 27.9411 0 18ZM27 14.4V12.6H9V14.4H27ZM18 21.6H9V23.4H18V21.6ZM9 17.1H27V18.9H9V17.1Z"
                fill={stroke}
            />
        </svg>
    )
}

export default EmptyComment
