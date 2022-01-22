import React from 'react'

import type { IIconProps } from './types'

const ChevronDown = ({ size = 16, fill = 'currentColor' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5L8 11L2 5" stroke={fill} strokeWidth="2" />
        </svg>
    )
}

export default ChevronDown
