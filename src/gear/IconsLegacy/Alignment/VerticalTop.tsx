import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignVerticalTop = ({ size }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="2" width="2" height="16" transform="rotate(-90 0 2)" fill="#40403D" fillOpacity="0.56" />
        <rect x="4" y="14" width="9" height="3" transform="rotate(-90 4 14)" fill="#40403D" />
        <rect x="9" y="11" width="6" height="3" transform="rotate(-90 9 11)" fill="#40403D" />
    </svg>
)

export default AlignVerticalTop
