import React from 'react'

interface IProps {
    size: number
    stroke: string
}
const AlignBottom = ({ size, stroke }: IProps) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3015 8.40006C12.4672 8.62097 12.4224 8.93437 12.2015 9.10006L8.30156 12.025C8.1238 12.1584 7.87938 12.1584 7.70161 12.0251L3.80066 9.10008C3.57973 8.93442 3.53492 8.62103 3.70058 8.40009L4.30049 7.60002C4.46614 7.37909 4.77954 7.33428 5.00047 7.49994L6.20028 8.39957C6.52991 8.64673 7.00024 8.41153 7.00024 7.99954L7.00024 0.500002C7.00024 0.22386 7.2241 2.38251e-06 7.50024 2.41873e-06L8.50024 2.54986e-06C8.77638 2.58607e-06 9.00024 0.22386 9.00024 0.500003L9.00024 8.00102C9.00024 8.41304 9.47062 8.64823 9.80024 8.40102L11.0015 7.50006C11.2224 7.33437 11.5358 7.37914 11.7015 7.60006L12.3015 8.40006Z"
            fill={stroke}
        />
        <rect y="14" width="16" height="2" fill={stroke} />
    </svg>
)

export default AlignBottom
