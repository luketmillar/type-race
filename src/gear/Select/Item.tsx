import { Menu } from 'gear'
import React, { ReactNode } from 'react'

import { useSelectContext } from './SelectContext'

interface IProps {
    value: any
    children: ReactNode
    id?: string
}
const SelectItem = ({ value, children, id }: IProps) => {
    const { value: selectedValue, onSelect } = useSelectContext()
    return (
        <Menu.Item onClick={() => onSelect(value)} selected={selectedValue === value} testId={id}>
            {children}
        </Menu.Item>
    )
}

export default SelectItem
