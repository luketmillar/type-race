import React from 'react'

import type { IIconProps } from './types'

const CaretUp = ({ size = 16, fill = 'currentColor' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11H2L8.19355 5L14 11Z" fill={fill} />
        </svg>
    )
}

export default CaretUp
