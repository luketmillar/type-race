import useVideo from './useVideo'
import useWakeLock from './useWakeLock'

const useNoSleep = () => {
    if ('wakeLock' in window.navigator) {
        return useWakeLock()
    } else {
        return useVideo()
    }
}

export default useNoSleep
