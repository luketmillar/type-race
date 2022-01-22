import { Button, Color, Menu, Utils } from 'gear'
import { Type } from 'gear/Button'
import React, { ReactNode, useRef } from 'react'

import Item from './Item'
import { IProps, Provider } from './SelectContext'

interface ISelectProps extends IProps {
    staticLabel?: string
    label: string
    children: ReactNode
    id?: string
    type?: Type
}

const Select = ({ staticLabel, label, value, onSelect, children, id, type = Type.Clear }: ISelectProps) => {
    const ref = useRef<HTMLButtonElement>(null)
    const menu = Utils.Hooks.useModalControl()
    return (
        <Provider value={value} onSelect={onSelect}>
            <Button innerRef={ref} type={type} onClick={menu.toggle} id={id} style={{ fontWeight: 400 }}>
                {staticLabel && <div style={{ marginRight: 4, color: Color.palette.moody }}>{staticLabel}</div>}
                <div style={{ marginRight: 8 }}>{label}</div>
                <Chevron />
            </Button>
            {menu.isOpen && (
                <Menu.Container position={{ ref, placement: 'bottom-start' }} onClose={menu.close} isSelectionMenu>
                    {children}
                </Menu.Container>
            )}
        </Provider>
    )
}

const Chevron = () => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 5L5.29289 5.70711L6 6.41421L6.70711 5.70711L6 5ZM6.70711 4.29289L2.70711 0.292893L1.29289 1.70711L5.29289 5.70711L6.70711 4.29289ZM6.70711 5.70711L10.7071 1.70711L9.29289 0.292893L5.29289 4.29289L6.70711 5.70711Z"
            fill="currentColor"
        />
    </svg>
)

Select.Item = Item

export default Select
