import React from 'react'

import type { IIconProps } from './types'

const AddPeople = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="4" stroke={fill} strokeWidth="2" />
        <path
            d="M2 21V19C2 16.7909 3.79086 15 6 15H9H12C14.2091 15 16 16.7909 16 19V21"
            stroke={fill}
            strokeWidth="2"
        />
        <path d="M20 7V11M20 15V11M20 11H16H24" stroke="black" strokeWidth="2" />
    </svg>
)

export default AddPeople
