import { useIsMobileLayout } from 'gear/Layout'

export const useIsDrawer = () => {
    return useIsMobileLayout()
}
