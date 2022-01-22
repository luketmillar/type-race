import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Home = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12V11H9H7H6V12V15H1V6.5L8 1.25L15 6.5V15H10V12Z" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default Home
