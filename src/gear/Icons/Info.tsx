import React from 'react'

import type { IIconProps } from './types'

const Info = ({ size = 16, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke={fill} strokeWidth="2" />
        <rect x="7" y="7.5" width="2" height="4.5" fill={fill} />
        <rect x="6.75" y="4" width="2.5" height="2.5" rx="1.25" fill={fill} />
    </svg>
)

export default Info
