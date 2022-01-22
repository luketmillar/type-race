import { v4 as uuid } from '@lukeed/uuid'
import React from 'react'

const maskId = uuid()

interface IProps {
    size: number
    stroke: string
}
const Blur = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id={maskId} fill="white">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4ZM5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3C11 4.65685 9.65685 6 8 6C6.34315 6 5 4.65685 5 3ZM8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14ZM5 13C5 11.3431 6.34315 10 8 10C9.65685 10 11 11.3431 11 13C11 14.6569 9.65685 16 8 16C6.34315 16 5 14.6569 5 13ZM2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8ZM3 5C1.34315 5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11C4.65685 11 6 9.65685 6 8C6 6.34315 4.65685 5 3 5ZM13 9C12.4477 9 12 8.55228 12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9ZM10 8C10 6.34315 11.3431 5 13 5C14.6569 5 16 6.34315 16 8C16 9.65685 14.6569 11 13 11C11.3431 11 10 9.65685 10 8Z"
                />
            </mask>
            <path
                d="M5 3C5 4.65685 6.34315 6 8 6V2C8.55229 2 9 2.44772 9 3H5ZM8 0C6.34315 0 5 1.34315 5 3H9C9 3.55228 8.55229 4 8 4V0ZM11 3C11 1.34315 9.65685 0 8 0V4C7.44772 4 7 3.55229 7 3H11ZM8 6C9.65685 6 11 4.65685 11 3H7C7 2.44771 7.44772 2 8 2V6ZM8 -2C5.23858 -2 3 0.238576 3 3H7C7 2.44772 7.44772 2 8 2V-2ZM13 3C13 0.238577 10.7614 -2 8 -2V2C8.55229 2 9 2.44772 9 3H13ZM8 8C10.7614 8 13 5.76142 13 3H9C9 3.55228 8.55229 4 8 4V8ZM3 3C3 5.76142 5.23858 8 8 8V4C7.44772 4 7 3.55228 7 3H3ZM5 13C5 14.6569 6.34315 16 8 16V12C8.55229 12 9 12.4477 9 13H5ZM8 10C6.34315 10 5 11.3431 5 13H9C9 13.5523 8.55229 14 8 14V10ZM11 13C11 11.3431 9.65685 10 8 10V14C7.44771 14 7 13.5523 7 13H11ZM8 16C9.65685 16 11 14.6569 11 13H7C7 12.4477 7.44771 12 8 12V16ZM8 8C5.23858 8 3 10.2386 3 13H7C7 12.4477 7.44772 12 8 12V8ZM13 13C13 10.2386 10.7614 8 8 8V12C8.55229 12 9 12.4477 9 13H13ZM8 18C10.7614 18 13 15.7614 13 13H9C9 13.5523 8.55229 14 8 14V18ZM3 13C3 15.7614 5.23858 18 8 18V14C7.44772 14 7 13.5523 7 13H3ZM3 7C3.55229 7 4 7.44772 4 8H0C0 9.65685 1.34315 11 3 11V7ZM2 8C2 7.44772 2.44771 7 3 7V11C4.65685 11 6 9.65685 6 8H2ZM3 9C2.44772 9 2 8.55229 2 8H6C6 6.34315 4.65685 5 3 5V9ZM4 8C4 8.55229 3.55228 9 3 9V5C1.34315 5 0 6.34315 0 8H4ZM2 8C2 7.44772 2.44772 7 3 7V3C0.238576 3 -2 5.23858 -2 8H2ZM3 9C2.44772 9 2 8.55229 2 8H-2C-2 10.7614 0.238577 13 3 13V9ZM4 8C4 8.55229 3.55228 9 3 9V13C5.76142 13 8 10.7614 8 8H4ZM3 7C3.55228 7 4 7.44772 4 8H8C8 5.23858 5.76142 3 3 3V7ZM10 8C10 9.65685 11.3431 11 13 11V7C13.5523 7 14 7.44771 14 8H10ZM13 5C11.3431 5 10 6.34315 10 8H14C14 8.55229 13.5523 9 13 9V5ZM16 8C16 6.34315 14.6569 5 13 5V9C12.4477 9 12 8.55229 12 8H16ZM13 11C14.6569 11 16 9.65685 16 8H12C12 7.44771 12.4477 7 13 7V11ZM13 3C10.2386 3 8 5.23858 8 8H12C12 7.44772 12.4477 7 13 7V3ZM18 8C18 5.23858 15.7614 3 13 3V7C13.5523 7 14 7.44772 14 8H18ZM13 13C15.7614 13 18 10.7614 18 8H14C14 8.55229 13.5523 9 13 9V13ZM8 8C8 10.7614 10.2386 13 13 13V9C12.4477 9 12 8.55229 12 8H8Z"
                fill={stroke}
                mask={`url(#${maskId})`}
            />
        </svg>
    )
}

export default Blur
