import React from 'react'

import type { IIconProps } from './types'

const Grid = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            width="6"
            height="6"
            rx="1"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 10 20)"
            stroke={fill}
            strokeWidth="2"
        />
        <rect
            width="6"
            height="6"
            rx="1"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 20 20)"
            stroke={fill}
            strokeWidth="2"
        />
        <rect
            width="6"
            height="6"
            rx="1"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 20 10)"
            stroke={fill}
            strokeWidth="2"
        />
        <rect
            width="6"
            height="6"
            rx="1"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 10 10)"
            stroke={fill}
            strokeWidth="2"
        />
    </svg>
)

export default Grid
