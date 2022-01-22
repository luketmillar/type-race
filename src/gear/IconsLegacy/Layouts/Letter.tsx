import React from 'react'
interface IProps {
    size: number
    stroke: string
}
const Letter = ({}: IProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6.5" y="0.5" width="19" height="31" stroke="#404040" />
            <rect
                x="20.5"
                y="31.5"
                width="14"
                height="19"
                transform="rotate(180 20.5 31.5)"
                fill="#A7E5FF"
                stroke="#404040"
            />
        </svg>
    )
}

export default Letter
