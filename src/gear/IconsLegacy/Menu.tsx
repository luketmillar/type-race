import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const menu = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="2" width="16" height="2" fill={stroke} />
            <rect y="7" width="16" height="2" fill={stroke} />
            <rect y="12" width="16" height="2" fill={stroke} />
        </svg>
    )
}

export default menu
