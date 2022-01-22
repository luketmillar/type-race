import React from 'react'

const Context = React.createContext({ isMobileLayout: false })

export const Provider = Context.Provider

export const useIsMobileLayout = () => {
    return React.useContext(Context).isMobileLayout
}
