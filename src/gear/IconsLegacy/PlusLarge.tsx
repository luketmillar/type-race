import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const PlusLarge = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 9V14H9V9H14V7H9V2H7V7H2V9H7Z" fill={stroke} />
    </svg>
)

export default PlusLarge
