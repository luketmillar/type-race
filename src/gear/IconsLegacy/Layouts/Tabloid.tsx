import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Tabloid = ({}: IProps) => {
    return (
        <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.5" y="0.5" width="21" height="33" fill="#A7E5FF" stroke="#404040" />
        </svg>
    )
}

export default Tabloid
