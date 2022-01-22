import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Opacity = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="16" transform="matrix(-1 0 0 1 14 0)" fill={stroke} />
        <rect width="2" height="14" transform="matrix(-1 0 0 1 10 1)" fill={stroke} fillOpacity="0.75" />
        <rect width="2" height="12" transform="matrix(-1 0 0 1 6 2)" fill={stroke} fillOpacity="0.5" />
        <rect width="2" height="10" transform="matrix(-1 0 0 1 2 3)" fill={stroke} fillOpacity="0.25" />
    </svg>
)

export default Opacity
