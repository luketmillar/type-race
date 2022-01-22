import React from 'react'

import type { IIconProps } from './types'

const Template = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="12" height="12" rx="2" stroke={fill} strokeWidth="2" />
        <path d="M6 4H17C18.6569 4 20 5.34315 20 7V18" stroke={fill} strokeWidth="2" strokeLinejoin="round" />
    </svg>
)

export default Template
