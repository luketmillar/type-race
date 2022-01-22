import React from 'react'

const useModalControl = (initialValue = false) => {
    const [isOpen, setOpen] = React.useState(initialValue)
    const immediateRef = React.useRef<number | undefined>()
    const setOpenImmediate = React.useCallback(
        (value: boolean) => {
            if (immediateRef.current) {
                window.clearTimeout(immediateRef.current)
            }
            immediateRef.current = window.setTimeout(() => {
                setOpen(value)
                immediateRef.current = undefined
            }, 0)
        },
        [setOpen]
    )
    const open = React.useCallback(() => {
        setOpenImmediate(true)
    }, [setOpenImmediate])
    const close = React.useCallback(() => {
        setOpenImmediate(false)
    }, [setOpenImmediate])
    const set = React.useCallback((value: boolean) => {
        setOpen(value)
    }, [])
    // toggle will flip the current isOpen value instead of flipping whatever the value is after state updates to handle the fact
    // that close might be called because of a click outside the modal. We don't want to double flip the value in that case.
    const toggle = React.useCallback(() => {
        setOpenImmediate(!isOpen)
    }, [isOpen, setOpenImmediate])

    React.useEffect(() => {
        return () => {
            if (immediateRef.current) {
                window.clearTimeout(immediateRef.current)
            }
        }
    }, [])
    return {
        isOpen,
        open,
        close,
        set,
        toggle
    }
}

export default useModalControl
