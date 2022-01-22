import React from 'react'
import whatInput from 'what-input'

const placeHolder = () => {
    // do nothing
}
const keyboardPlaceholder = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // do nothing
}

const Context = React.createContext({
    addItemRef: (ref: React.RefObject<HTMLButtonElement>, isSubmenu: boolean) => placeHolder,
    handleKeyDown: keyboardPlaceholder,
    isSelectionMenu: false
})

export const Provider = ({
    children,
    onClose,
    isSubmenu,
    isSelectionMenu = false
}: {
    children: React.ReactNode
    isSubmenu: boolean
    isSelectionMenu?: boolean
    onClose: () => void
}) => {
    const items = React.useRef<{ ref: React.RefObject<HTMLButtonElement>; isSubmenu: boolean }[]>([])

    const addItemRef = (ref: React.RefObject<HTMLButtonElement>, isSubmenu: boolean) => {
        const item = { ref, isSubmenu }
        items.current.push(item)
        if (items.current.length === 1 && whatInput.ask('intent') === 'keyboard') {
            ref.current?.focus()
        }
        return () => {
            const index = items.current.indexOf(item)
            if (index !== -1) {
                items.current.splice(index, 1)
            }
        }
    }

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLButtonElement>) => {
            const isDown = e.key === 'ArrowDown'
            const isUp = e.key === 'ArrowUp'
            const isLeft = e.key === 'ArrowLeft'
            const isRight = e.key === 'ArrowRight'
            if (isUp || isDown) {
                // up and down through focusing on each menu item
                e.nativeEvent.stopImmediatePropagation()
                e.stopPropagation()
                let index = items.current.findIndex(item => item.ref.current === e.target)
                if (index === -1) {
                    return
                }
                if (isUp) {
                    index--
                } else {
                    index++
                }
                const newIndex = (items.current.length + index) % items.current.length
                items.current[newIndex].ref.current?.focus()
            }
            if (isRight) {
                // open submenu
                const item = items.current.find(item => item.ref.current === e.target)
                if (!item) {
                    return
                }
                if (item.isSubmenu) {
                    item.ref.current?.click()
                }
            }
            if (isLeft) {
                // close submenu
                if (isSubmenu) {
                    onClose()
                }
            }
        },
        [items, onClose, isSubmenu]
    )

    return (
        <Context.Provider
            value={{
                addItemRef,
                handleKeyDown,
                isSelectionMenu
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useMenuContext = () => {
    return React.useContext(Context)
}

export const useIsSelectionMenu = () => {
    return useMenuContext().isSelectionMenu
}

export default Provider
