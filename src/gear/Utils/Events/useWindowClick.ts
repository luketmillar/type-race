import { useWrappedCallback } from 'gear/Utils/Hooks'

import { useWindowEventListener } from './WindowEventListener'

const useWindowClick = (onClick?: (e: MouseEvent) => void, capture?: boolean) => {
    const handleClick = useWrappedCallback(onClick) as EventListener
    useWindowEventListener('click', handleClick, capture ? { capture } : undefined)
}

export default useWindowClick
