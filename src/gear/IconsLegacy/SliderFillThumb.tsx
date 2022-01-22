import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const SliderFillThumb = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3L14.5 8L10.5 13" stroke={stroke} strokeWidth="2" />
        <path d="M5.5 13L1.5 8L5.5 3" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default SliderFillThumb
