import React from 'react'

import type { IIconProps } from './types'

const MutedIcon = ({ size = 24, fill = 'currentColor' }: IIconProps) => (
    <svg width={size} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 9.32368V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V11C10 11.5427 10.2162 12.0349 10.5671 12.3953L9.07592 13.7294C8.40848 13.0147 8 12.0551 8 11V5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V7.53421L14 9.32368ZM16 10.2179L10.8446 14.8306C11.2104 14.9408 11.5983 15 12 15C14.2091 15 16 13.2091 16 11V10.2179ZM7.5852 15.0632C6.60103 13.9945 6 12.5674 6 11V9H4V11C4 13.0798 4.79364 14.9742 6.09459 16.3969L7.5852 15.0632ZM7.63308 17.7041L9.19589 16.3058C10.0328 16.749 10.9871 17 12 17C15.3137 17 18 14.3137 18 11V9H20V11C20 15.4183 16.4183 19 12 19C10.3887 19 8.8887 18.5236 7.63308 17.7041Z"
            fill={fill}
        />
        <rect x="11" y="18" width="2" height="3" fill={fill} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.29395 18.0031L19.1797 2L20.5133 3.49048L2.62753 19.4936L1.29395 18.0031Z"
            fill={fill}
        />
        <rect x="8" y="21" width="8" height="2" fill={fill} />
    </svg>
)

export default MutedIcon
