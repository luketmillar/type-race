import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const Link = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5H7C7.29303 5 7.57134 5.06302 7.82212 5.17624C6.18787 5.67907 5 7.20082 5 9H4C2.89543 9 2 8.10457 2 7C2 5.89543 2.89543 5 4 5ZM5.53513 11H4C1.79086 11 0 9.20914 0 7C0 4.79086 1.79086 3 4 3H7C8.48057 3 9.77325 3.8044 10.4649 5H12C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13H9C7.51944 13 6.22675 12.1956 5.53513 11ZM11 7H12C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11H9C8.70697 11 8.42866 10.937 8.17788 10.8238C9.81214 10.3209 11 8.79918 11 7ZM9 7C7.89543 7 7 7.89543 7 9C8.10457 9 9 8.10457 9 7Z"
            fill={stroke}
        />
    </svg>
)

export default Link
