import React from 'react'

import { IIconProps } from './types'

const Check = ({
    size = 16,
    fill = 'currentcolor',
    style
}: IIconProps & {
    style?: React.CSSProperties
}) => (
    <svg style={style} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2L6 13L1 8" stroke={fill} strokeWidth="2" />
    </svg>
)

export default Check
