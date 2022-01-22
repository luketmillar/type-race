import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Widescreen = ({}: IProps) => {
    return (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="31" height="23" rx="0.5" stroke="#404040" />
            <path
                d="M2.14258 8.5H1.64764L1.6426 8.99491L1.50003 22.9949L1.49488 23.5H2H32H32.5V23V9V8.5H32H2.14258Z"
                fill="#A7E5FF"
                stroke="#404040"
            />
        </svg>
    )
}

export default Widescreen
