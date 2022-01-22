import React from 'react'

const submenu: {
    open: (id: string, sticky?: boolean) => void
    close: (id: string) => void
    forceClose: (immediate?: boolean) => void
    id: string | undefined
} = {
    open: () => null,
    close: () => null,
    forceClose: () => null,
    id: undefined
}

const Context = React.createContext(submenu)

type Action = { timeout: number; id?: string }

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const [openSubmenuId, setOpenSubmenuId] = React.useState<string | undefined>()
    const isStickyRef = React.useRef<boolean>(false)

    const openActionRef = React.useRef<Action | undefined>()
    const closeActionRef = React.useRef<Action | undefined>()

    const cancelPendingOpen = React.useCallback(() => {
        window.clearTimeout(openActionRef.current?.timeout)
        openActionRef.current = undefined
    }, [])
    const cancelPendingClose = React.useCallback(() => {
        window.clearTimeout(closeActionRef.current?.timeout)
        closeActionRef.current = undefined
    }, [])

    const open = React.useCallback(
        (id: string) => {
            cancelPendingOpen()
            cancelPendingClose()
            setOpenSubmenuId(id)
        },
        [cancelPendingOpen, cancelPendingClose]
    )
    const queueOpen = React.useCallback(
        (id: string) => {
            openActionRef.current = {
                timeout: window.setTimeout(() => open(id), 200),
                id
            }
        },
        [open]
    )
    const openSubmenu = React.useCallback(
        (id: string, sticky = false) => {
            // cancel any previous open
            cancelPendingOpen()
            isStickyRef.current = sticky
            if (sticky) {
                // a sticky open happens immediately
                open(id)
            } else {
                queueOpen(id)
            }
        },
        [open, queueOpen, cancelPendingOpen]
    )

    const close = React.useCallback((id?: string) => {
        if (isStickyRef.current && id !== undefined) {
            // if this was opened as sticky don't close it unless there was a hard close (no id)
            return
        }
        setOpenSubmenuId(undefined)
        cancelPendingClose()
        isStickyRef.current = false
    }, [])
    const queueClose = React.useCallback(
        (id?: string) => {
            closeActionRef.current = {
                timeout: window.setTimeout(() => close(id), 300),
                id
            }
        },
        [close]
    )
    const closeSubmenu = React.useCallback(
        (id: string) => {
            if (id === undefined) {
                // this is a hard close (for example: a sibling menu item was hovered)
                queueClose(id)
                return
            }
            if (openActionRef.current?.id === id) {
                // this is queued up to open so just cancel
                cancelPendingOpen()
                return
            }
            if (openSubmenuId !== id) {
                // there's another menu thats open or queued to open, just ignore this close
                return
            }
            // this menu is open
            if (closeActionRef.current?.id === id) {
                // this is already queued to close, so let it close
                return
            }
            queueClose(id)
        },
        [openSubmenuId, queueClose, cancelPendingOpen]
    )
    const forceClose = React.useCallback(
        (immediate?: boolean) => {
            if (immediate) {
                close()
            } else {
                queueClose()
            }
        },
        [close, queueClose]
    )

    return (
        <Context.Provider value={{ open: openSubmenu, close: closeSubmenu, forceClose, id: openSubmenuId }}>
            {children}
        </Context.Provider>
    )
}

export const useSubmenuContext = () => {
    return React.useContext(Context)
}

export const useSubmenu = (id: string) => {
    const submenuContext = useSubmenuContext()
    const open = React.useCallback(
        (sticky?: boolean) => {
            submenuContext.open(id, sticky)
        },
        [id, submenuContext.open]
    )
    const close = React.useCallback(() => {
        submenuContext.close(id)
    }, [id, submenuContext.close])
    return {
        isOpen: submenuContext.id === id,
        open,
        close,
        forceClose: submenuContext.forceClose
    }
}

export default Provider
