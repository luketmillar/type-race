import { v4 as uuid } from '@lukeed/uuid'
import React from 'react'

const maskId = uuid()

interface IProps {
    size: number
    stroke: string
}
const Templates = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={maskId} fill="white">
            <rect width="16" height="16" rx="0.5" />
        </mask>
        <rect width="16" height="16" rx="0.5" stroke={stroke} strokeWidth="4" mask={`url(#${maskId})`} />
        <rect x="2" y="6" width="12" height="2" fill={stroke} />
        <rect x="9" y="8" width="2" height="6" fill={stroke} />
    </svg>
)

export default Templates
