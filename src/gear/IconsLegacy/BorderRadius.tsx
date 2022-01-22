import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const BorderRadius = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5003 1.99976C15.7765 1.99976 16.0003 1.7759 16.0003 1.49976L16.0004 0.499765C16.0004 0.223619 15.7765 -0.00024415 15.5004 -0.000244162L0.50034 -0.000244818C0.224197 -0.00024483 0.000339498 0.223613 0.000339486 0.499755L0.000339464 1.00034C0.000339464 1.00036 0.000324206 1.00038 0.000305132 1.00038C0.000286059 1.00038 0.0002708 1.00039 0.0002708 1.00041L0.000270166 15.5004C0.000270154 15.7765 0.224128 16.0004 0.50027 16.0004L1.50027 16.0004C1.77641 16.0004 2.00027 15.7765 2.00027 15.5004L2.00027 2.49976C2.00027 2.22361 2.22413 1.99976 2.50027 1.99976L15.5003 1.99976Z"
            fill={stroke}
            fillOpacity="0.21"
        />
        <rect x="1" y="1" width="36" height="36" rx="15" stroke={stroke} strokeWidth="2" />
    </svg>
)

export default BorderRadius
