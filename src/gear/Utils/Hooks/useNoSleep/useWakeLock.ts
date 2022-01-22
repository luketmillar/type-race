import { Utils } from 'gear'
import { useWindowEventListener } from 'gear/Utils/Events'
import React from 'react'

const useWakeLock = () => {
    const isEnabled = React.useRef(false)
    const wakeLock = React.useRef()

    const release = React.useCallback(() => {
        isEnabled.current = false
    }, [])

    const enable = React.useCallback(async () => {
        const navigator: any = window.navigator
        const lock: any = await navigator.wakeLock.request('screen').catch(Utils.Errors.swallow())
        lock?.addEventListener('release', release)
        wakeLock.current = lock
    }, [])

    const disable = React.useCallback(() => {
        isEnabled.current = false
        const lock: any = wakeLock.current
        lock?.release().catch(Utils.Errors.swallow())
        lock?.removeEventListener('release', release)
    }, [])

    const onVisibilityChange = React.useCallback(() => {
        if (document.visibilityState === 'visible') {
            enable()
        } else {
            disable()
        }
    }, [enable, disable])

    React.useEffect(() => {
        enable()
        return () => disable()
    }, [])

    useWindowEventListener('visibilitychange', onVisibilityChange)
}

export default useWakeLock
