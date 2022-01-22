import React, { createContext, ReactNode, useContext } from 'react'

export interface IProps {
    value: any
    onSelect: (value: any) => void
}

const placeholderSelect = () => {
    /* */
}

const SelectContext = createContext<IProps>({ value: undefined, onSelect: placeholderSelect })

export const Provider = ({ value, onSelect, children }: IProps & { children: ReactNode }) => (
    <SelectContext.Provider value={{ value, onSelect }}>{children}</SelectContext.Provider>
)

export const useSelectContext = () => useContext(SelectContext)
