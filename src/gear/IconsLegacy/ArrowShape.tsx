import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ArrowShape = ({ size, stroke }: IProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2193 0.264053L0 18.4834L1.41421 19.8976L19.6336 1.67827L18.2193 0.264053Z" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8808 0.0243725L19.8654 0.0320419L19.873 1.01669L19.9269 8.03392L17.927 8.04927L17.8914 3.41961L9.73399 11.577L8.31977 10.1628L16.4768 2.00575L11.8474 1.9698L11.8629 -0.0301682L18.8808 0.0243725Z"
                fill={stroke}
            />
        </svg>
    )
}

export default ArrowShape
