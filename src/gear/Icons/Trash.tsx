import React from 'react'

import type { IIconProps } from './types'

const Trash = ({ size = 16, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 6H19M5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V6M5 6H2M19 6H22"
            stroke={fill}
            strokeWidth="2"
        />
        <path d="M9 5V4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V5" stroke={fill} strokeWidth="2" />
    </svg>
)

export default Trash
