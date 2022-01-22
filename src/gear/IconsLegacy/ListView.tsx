import React from 'react'

interface IProps {
    size: number
    stroke: string
}

const ListView = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3V1H0V3L16 3ZM16 5V7L0 7V5L16 5ZM16 11V9L0 9V11L16 11ZM16 15V13L0 13V15L16 15Z"
            fill={stroke}
        />
    </svg>
)

export default ListView
