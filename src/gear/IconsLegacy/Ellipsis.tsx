import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Ellipsis = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 7H4V9H2V7ZM7 7H9V9H7V7ZM14 7H12V9H14V7Z" fill={stroke} />
    </svg>
)

export default Ellipsis
