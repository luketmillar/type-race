import React from 'react'

import type { IIconProps } from './types'

const LiveSessions = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12C3 9.51473 4.00735 7.26474 5.63602 5.63606L4.22181 4.22184C2.23121 6.21245 1 8.96244 1 12C1 15.0376 2.23123 17.7876 4.22185 19.7782L5.63606 18.364C4.00737 16.7353 3 14.4853 3 12ZM5 12C5 10.067 5.78349 8.31702 7.05023 7.05027L8.46445 8.46449C7.55964 9.36931 7 10.6193 7 12C7 13.3807 7.55965 14.6307 8.46449 15.5356L7.05027 16.9498C5.78351 15.683 5 13.933 5 12ZM16.9498 7.05027L15.5356 8.46449C16.4404 9.36931 17 10.6193 17 12C17 13.3807 16.4403 14.6307 15.5355 15.5356L16.9497 16.9498C18.2165 15.683 19 13.933 19 12C19 10.067 18.2165 8.31702 16.9498 7.05027ZM21 12C21 14.4853 19.9926 16.7353 18.3639 18.364L19.7782 19.7782C21.7688 17.7876 23 15.0376 23 12C23 8.96244 21.7688 6.21245 19.7782 4.22184L18.364 5.63606C19.9926 7.26474 21 9.51473 21 12ZM12 1L12.0297 1.00004H11.9703L12 1ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
            fill={fill}
        />
    </svg>
)

export default LiveSessions
