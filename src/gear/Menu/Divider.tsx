import Color from 'gear/Color'
import ThemeContext, { Theme } from 'gear/Theme'
import React from 'react'

const MenuDivider = () => {
    const theme = ThemeContext.use()
    const color = theme === Theme.Light ? Color.palette.silver : Color.alpha(Color.palette.silver, 0.1)

    return <div style={{ borderBottom: `1px solid ${color}`, margin: '4px 0' }} />
}

export default MenuDivider
