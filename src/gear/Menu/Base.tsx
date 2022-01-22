import type { FlyoutPosition } from 'gear/Dialog'
import Dialog from 'gear/Dialog'
import { useIsDrawer } from 'gear/Menu/hooks'
import { ItemClickEvent } from 'gear/Menu/Item'
import React from 'react'

import MenuContextProvider from './MenuContext'
import SubmenuContextProvider from './SubmenuContext'

interface IProps {
    children: React.ReactNode
    position: FlyoutPosition
    onClose: () => void
    width?: number
    minWidth?: number
    maxWidth?: number
    isSubmenu?: boolean
    isSelectionMenu?: boolean
    menuId?: string
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
}
const MenuContainer = ({ position, children, onClose, isSubmenu, isSelectionMenu, ...containerProps }: IProps) => {
    const isDrawer = useIsDrawer()

    return (
        <SubmenuContextProvider>
            <MenuContextProvider onClose={onClose} isSubmenu={isSubmenu ?? false} isSelectionMenu={isSelectionMenu}>
                {isDrawer ? (
                    <DrawerMenu onClose={onClose} {...containerProps}>
                        {children}
                    </DrawerMenu>
                ) : (
                    <FlyoutMenu position={position} onClose={onClose} {...containerProps}>
                        {children}
                    </FlyoutMenu>
                )}
            </MenuContextProvider>
        </SubmenuContextProvider>
    )
}

const FlyoutMenu = ({ position, onClose, children, minWidth, maxWidth, width, ...containerProps }: IProps) => {
    return (
        <Dialog.Flyout
            size={Dialog.Size.Small}
            position={position}
            onClose={onClose}
            style={{ fontWeight: 400 }}
            {...containerProps}
        >
            <ClickTrap style={{ minWidth: minWidth ?? 192, width, maxWidth, padding: 4 }} onClose={onClose}>
                {children}
            </ClickTrap>
        </Dialog.Flyout>
    )
}
const DrawerMenu = ({ children, onClose, ...containerProps }: Omit<IProps, 'position'>) => {
    return (
        <Dialog.Drawer onClose={onClose} {...containerProps}>
            <ClickTrap style={{ padding: 16, width: '100%' }} onClose={onClose}>
                {children}
            </ClickTrap>
        </Dialog.Drawer>
    )
}

interface IClickTrapProps {
    style: React.CSSProperties
    children: React.ReactNode
    onClose: () => void
}
const ClickTrap = ({ children, onClose, style }: IClickTrapProps) => {
    return (
        <div
            style={style}
            onClick={(e: ItemClickEvent) => {
                if (e.isItemClick) {
                    // auto close the menu when an item is clicked
                    onClose()
                }
                e.stopPropagation()
            }}
        >
            {children}
        </div>
    )
}

export default MenuContainer
