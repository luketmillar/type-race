import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AddCollaborators = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 8C2 9.43518 2.50389 10.7527 3.34441 11.7852L5.40026 10.9629C7.06914 10.2953 8.93086 10.2953 10.5997 10.9629L12.6556 11.7852C13.4961 10.7527 14 9.43518 14 8H16C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0V2C4.68629 2 2 4.68629 2 8ZM8 14C6.94097 14 5.94602 13.7256 5.08236 13.2441L6.14305 12.8198C7.3351 12.343 8.6649 12.343 9.85695 12.8198L10.9176 13.2441C10.054 13.7256 9.05903 14 8 14ZM8 8C7.44772 8 7 7.55228 7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7C9 7.55228 8.55228 8 8 8ZM5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7ZM12 6V4H10V2H12V0H14V2H16V4H14V6H12Z"
                fill={stroke}
            />
        </svg>
    )
}

export default AddCollaborators
