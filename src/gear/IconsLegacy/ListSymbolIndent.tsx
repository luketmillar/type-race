import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const ListSymbolIndent = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <rect x="16" y="2" width="16" height="2" transform="rotate(-180 16 2)" fill={stroke} />
            <rect x="16" y="8" width="6" height="2" transform="rotate(-180 16 8)" fill={stroke} />
            <rect x="8" y="8" width="2" height="2" transform="rotate(-180 8 8)" fill={stroke} />
            <rect x="16" y="14" width="6" height="2" transform="rotate(-180 16 14)" fill={stroke} />
            <rect x="8" y="14" width="2" height="2" transform="rotate(-180 8 14)" fill={stroke} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.62465 10.2994C4.75794 10.1216 4.75793 9.87718 4.62461 9.69942L4.39964 9.39945L1.69964 5.79946C1.53395 5.57855 1.22055 5.53378 0.999636 5.69946L0.199637 6.29946C-0.0212763 6.46515 -0.0660475 6.77855 0.0996382 6.99947L2.12472 9.69957C2.25804 9.87733 2.25805 10.1217 2.12476 10.2995L0.0995175 13.0005C-0.0661415 13.2214 -0.0213327 13.5348 0.199601 13.7005L0.999672 14.3004C1.22061 14.4661 1.534 14.4212 1.69966 14.2003L4.39971 10.5994L4.62465 10.2994Z"
                fill={stroke}
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default ListSymbolIndent
