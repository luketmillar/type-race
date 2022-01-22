import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Missing = ({ size }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 8C14 11.3137 11.3137 14 8 14C6.72624 14 5.54518 13.6031 4.57377 12.9262L12.9262 4.57377C13.6031 5.54518 14 6.72624 14 8ZM14.3572 3.14276C15.3877 4.48949 16 6.17324 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C9.87065 0 11.5913 0.642051 12.9537 1.71781L12.9538 1.71777C13.4788 2.13233 13.9506 2.61129 14.3572 3.14273L14.3572 3.14276ZM3.14514 11.5264L11.5264 3.14514C10.5365 2.42488 9.31787 2 8 2C4.68629 2 2 4.68629 2 8C2 9.31787 2.42488 10.5365 3.14514 11.5264Z"
            fill="black"
        />
    </svg>
)

export default Missing
