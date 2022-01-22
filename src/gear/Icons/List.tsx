import { IIconProps } from 'gear/Icons/types'
import React from 'react'

const List = ({ size = 16, fill = 'currentcolor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="5" r="2" fill={fill} />
        <circle cx="4" cy="12" r="2" fill={fill} />
        <circle cx="4" cy="19" r="2" fill={fill} />
        <path d="M8 5H22M8 12H22M8 19H22" stroke={fill} strokeWidth="2" />
    </svg>
)

export default List
