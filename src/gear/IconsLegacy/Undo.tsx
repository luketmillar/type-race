import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Redo = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.06183L3.44995 0.461914L5.04994 1.66192L3.29645 3.9999L6.50004 3.9999L7.125 3.9999L10.5 3.9999C13.5376 3.9999 16 6.46233 16 9.4999C16 12.5375 13.5376 14.9999 10.5 14.9999H6.50004C6.33148 14.9999 6.16469 14.9923 6 14.9775V12.9999H10.5C12.433 12.9999 14 11.4329 14 9.4999C14 7.5669 12.433 5.9999 10.5 5.9999L3.20315 5.9999L5.05002 8.46299L3.44987 9.6628L0 5.06183Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Redo
