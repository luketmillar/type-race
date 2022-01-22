import { Color, Icons } from 'gear'
import Button, { IProps as IButtonProps } from 'gear/Button'
import { useIsDrawer } from 'gear/Menu/hooks'
import { useSubmenuContext } from 'gear/Menu/SubmenuContext'
import { wrapRef } from 'gear/Utils/Hooks'
import React from 'react'

import { useIsSelectionMenu, useMenuContext } from './MenuContext'

export type ItemClickEvent = React.MouseEvent & { isItemClick?: boolean }

const useItemHandler = (ref: React.RefObject<HTMLButtonElement> | undefined, isSubmenu: boolean) => {
    const buttonRef = wrapRef(ref)
    const { addItemRef, handleKeyDown } = useMenuContext()

    React.useEffect(() => {
        return addItemRef(buttonRef, isSubmenu)
    }, [])

    return { buttonRef, handleKeyDown }
}

export interface IProps extends Omit<IButtonProps, 'size' | 'shape' | 'width' | 'variant' | 'onClick'> {
    onClick?: (e: ItemClickEvent) => void
    isSubmenu?: boolean
    subLabel?: React.ReactNode | string
    testId?: string
    disabled?: boolean
    selected?: boolean
}
const MenuItem = ({
    onClick,
    testId,
    isSubmenu = false,
    subLabel,
    onMouseEnter,
    children,
    style,
    disabled,
    selected,
    ...rest
}: IProps) => {
    const handleClick = React.useCallback((e: ItemClickEvent) => {
        onClick?.(e)
        if (!e.isPropagationStopped()) {
            e.isItemClick = true
        }
    }, [])
    const isDrawer = useIsDrawer()
    const isSelectionMenu = useIsSelectionMenu()
    const { buttonRef, handleKeyDown } = useItemHandler(rest.innerRef, isSubmenu)

    const submenu = useSubmenuContext()
    const handleMouseEnter = React.useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isSubmenu) {
                // when we mouse over a menu item we need to tell the menuContainer to close any open submenu
                submenu.forceClose()
            }
            onMouseEnter?.(e)
        },
        [submenu, onMouseEnter]
    )

    const contents = (
        <>
            {isSelectionMenu &&
                (selected ? (
                    <>
                        <Icons.Check style={{ marginLeft: -4 }} size={12} />
                        <div style={{ width: 8, flexShrink: 0 }} />
                    </>
                ) : (
                    <div style={{ width: 16, flexShrink: 0 }} />
                ))}
            <div
                style={{
                    textAlign: 'start',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {children}
            </div>
            {subLabel && (
                <>
                    <div style={{ flex: 1, minWidth: 12 }} />
                    <div style={{ color: Color.palette.moody, fontFamily: 'Inter' }}>{subLabel}</div>
                </>
            )}
        </>
    )
    const buttonOverrideStyles: React.CSSProperties = {
        fontWeight: 400,
        borderRadius: 5,
        justifyContent: 'flex-start',
        ...style,
        ...(!isDrawer && { fontSize: 13 })
    }
    return (
        <Button
            innerRef={buttonRef}
            type={Button.Type.Clear}
            size={isDrawer ? Button.Size.Large : Button.Size.Small}
            shape={Button.Shape.Rectangle}
            width={Button.Width.Grow}
            {...rest}
            onClick={handleClick}
            style={buttonOverrideStyles}
            id={testId}
            onKeyDown={handleKeyDown}
            onMouseEnter={isDrawer ? undefined : handleMouseEnter}
            propagateClicks
            className={isSubmenu ? 'submenu-item' : 'menu-item'}
            disabled={disabled}
        >
            {contents}
        </Button>
    )
}

export default MenuItem
