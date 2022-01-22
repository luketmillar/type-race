import Color from 'gear/Color'
import React from 'react'

const MenuHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{
                color: Color.palette.moody,
                margin: '16px 12px 8px',
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: 1
            }}
        >
            {children}
        </div>
    )
}

export default MenuHeader
