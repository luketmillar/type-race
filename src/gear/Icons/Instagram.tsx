import React from 'react'

import type { IIconProps } from './types'

const Instagram = ({ size = 16, fill = 'currentColor' }: IIconProps) => (
    <svg height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="22" height="22" rx="4.5" fill="none" stroke={fill} />
        <rect x="6.55261" y="6.55261" width="9.89474" height="9.89474" rx="4.94737" fill="none" stroke={fill} />
        <rect x="17.4474" y="4.13159" width="1.42105" height="1.42105" rx="0.710526" stroke={fill} />
    </svg>
)

export default Instagram
