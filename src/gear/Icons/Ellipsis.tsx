import React from 'react'

import { IIconProps } from './types'

const Ellipsis = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="2" fill={fill} />
        <circle cx="12" cy="12" r="2" fill={fill} />
        <circle cx="4" cy="12" r="2" fill={fill} />
    </svg>
)
export default Ellipsis
