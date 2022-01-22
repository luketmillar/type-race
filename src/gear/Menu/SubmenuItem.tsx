import { v4 as uuid } from '@lukeed/uuid'
import Color from 'gear/Color'
import { useIsDrawer } from 'gear/Menu/hooks'
import { useSubmenu } from 'gear/Menu/SubmenuContext'
import React from 'react'

import MenuContainer from './Base'
import MenuItem, { IProps as IItemProps } from './Item'

interface IProps extends IItemProps {
    menu: JSX.Element | JSX.Element[]
    menuProps?: Omit<
        React.ComponentProps<typeof MenuContainer>,
        'onClose' | 'position' | 'onMouseEnter' | 'isSubmenu' | 'children'
    >
}
const SubmenuItem = ({ children, menu, menuProps, ...rest }: IProps) => {
    const id = React.useMemo(() => uuid(), [])
    const submenuControl = useSubmenu(id)
    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            // submenu clicks don't close anything so stop any propagation
            e.stopPropagation()
            submenuControl.open(true)
        },
        [submenuControl.open]
    )
    const ref = React.useRef(null)
    const isDrawer = useIsDrawer()
    const handleMenuItemMouseEnter = React.useCallback(() => {
        submenuControl.open()
    }, [submenuControl.open])
    const handleMenuItemMouseLeave = React.useCallback(() => {
        submenuControl.close()
    }, [submenuControl.close])

    const handleSubmenuMouseEnter = React.useCallback(() => {
        // when we mouse over the submenu we keep it sticky open (mouse out does not close it anymore)
        submenuControl.open(true)
    }, [submenuControl.open])
    const close = React.useCallback(() => {
        // when the menu closes (by keyboard right arrow) we need to immediately force close the submenu
        submenuControl.forceClose(true)
    }, [submenuControl.forceClose])
    return (
        <>
            <MenuItem
                innerRef={ref}
                onMouseEnter={isDrawer ? undefined : handleMenuItemMouseEnter}
                onMouseLeave={isDrawer ? undefined : handleMenuItemMouseLeave}
                isSubmenu
                {...rest}
                onClick={handleClick}
                subLabel={<RightChevron style={{ marginRight: -6, color: Color.palette.moody }} />}
            >
                {children}
            </MenuItem>
            {submenuControl.isOpen && (
                <MenuContainer
                    onClose={close}
                    position={{ ref, placement: 'right-start', offset: [-4, 0] }}
                    onMouseEnter={handleSubmenuMouseEnter}
                    isSubmenu
                    {...menuProps}
                >
                    {menu}
                </MenuContainer>
            )}
        </>
    )
}

const RightChevron = ({ style }: { style?: React.CSSProperties }) => (
    <svg style={style} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3.5L10.25 8L5.75 12.5" stroke="currentcolor" strokeWidth="2" />
    </svg>
)

export default SubmenuItem
