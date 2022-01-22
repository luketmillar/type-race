import { getGPUTier, TierResult } from 'detect-gpu'
import React from 'react'

let cachedStats: TierResult | undefined

export const useGPUStats = () => {
    const [stats, setGpuStats] = React.useState<TierResult | undefined>(cachedStats)
    React.useEffect(() => {
        if (cachedStats) {
            // only need to load this once globally
            return
        }
        getGPUTier().then((gpuStats: any) => {
            cachedStats = gpuStats
            setGpuStats(gpuStats)
        })
    }, [])
    return stats
}

export enum HardwardAcceleration {
    Unknown,
    Enabled,
    Disabled
}
export const useHardwareAcceleration = (): HardwardAcceleration => {
    const tier = useGPUStats()?.tier
    if (tier === undefined) {
        return HardwardAcceleration.Unknown
    } else if (tier === 0) {
        return HardwardAcceleration.Disabled
    } else {
        return HardwardAcceleration.Enabled
    }
}

export default useGPUStats
