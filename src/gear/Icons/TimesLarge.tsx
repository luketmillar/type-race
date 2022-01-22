import React from 'react'

import type { IIconProps } from './types'

const TimesLarge = ({ size = 16, fill = 'currentColor' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14.4497" y="3.84326" width="1" height="15" transform="rotate(45 14.4497 3.84326)" fill={fill} />
            <rect x="3.84326" y="4.55029" width="1" height="15" transform="rotate(-45 3.84326 4.55029)" fill={fill} />
        </svg>
    )
}

export default TimesLarge
