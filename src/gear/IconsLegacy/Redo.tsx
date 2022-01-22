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
                d="M16 5.06183L12.5501 0.461914L10.9501 1.66192L12.7035 3.9999L9.49996 3.9999L8.875 3.9999L5.49996 3.9999C2.46239 3.9999 -4.00543e-05 6.46233 -4.00543e-05 9.4999C-4.00543e-05 12.5375 2.46239 14.9999 5.49996 14.9999H9.49996C9.66852 14.9999 9.83531 14.9923 10 14.9775V12.9999H5.49996C3.56696 12.9999 1.99996 11.4329 1.99996 9.4999C1.99996 7.5669 3.56696 5.9999 5.49996 5.9999L12.7968 5.9999L10.95 8.46299L12.5501 9.6628L16 5.06183Z"
                fill={stroke}
            />
        </svg>
    )
}

export default Redo
