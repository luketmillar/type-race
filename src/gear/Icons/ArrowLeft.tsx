import React from 'react'

import type { IIconProps } from './types'

const ArrowLeft = ({ size = 16, fill = 'currentColor' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00005 9.89948L7.24269 5.65684L7.9498 6.36395L4.31374 10H17.0001V11H4.34318L7.94975 14.6066L7.24264 15.3137L3 11.071L3.00001 10.5L3.00005 9.89948Z"
                fill={fill}
                fillOpacity="0.85"
            />
        </svg>
    )
}

export default ArrowLeft
