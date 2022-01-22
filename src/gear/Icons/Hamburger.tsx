import React from 'react'

import type { IIconProps } from './types'

const Hamburger = ({ size = 16, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="2" width="16" height="2" fill={fill} />
        <rect y="7" width="16" height="2" fill={fill} />
        <rect y="12" width="16" height="2" fill={fill} />
    </svg>
)

export default Hamburger
