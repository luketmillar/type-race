import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Play = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8907 8L3 13.3258V2.67422L12.8907 8Z" stroke={stroke} strokeWidth="2" />
        </svg>
    )
}

export default Play
