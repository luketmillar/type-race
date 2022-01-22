import React from 'react'

import type { IIconProps } from './types'

const CircleCheck = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.7526 16.6585L18.7526 8.6585L17.2474 7.3415L10.9513 14.5371L7.70711 11.2929L6.29289 12.7071L10.2929 16.7071L11.0487 17.4629L11.7526 16.6585Z"
            fill={fill}
        />
    </svg>
)

export default CircleCheck
