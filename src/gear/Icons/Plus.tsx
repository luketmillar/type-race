import React from 'react'

import type { IIconProps } from './types'

const Plus = ({ size = 16, fill = 'currentColor' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 5H9V9H5V10H9V14H10V10H14V9H10V5Z" fill={fill} />
        </svg>
    )
}

export default Plus
