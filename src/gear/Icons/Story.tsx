import React from 'react'

import type { IIconProps } from './types'

const Story = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 9V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H13M19 9L13 3M19 9H14C13.4477 9 13 8.55228 13 8V3"
            stroke={fill}
            strokeWidth="2"
        />
    </svg>
)

export default Story
