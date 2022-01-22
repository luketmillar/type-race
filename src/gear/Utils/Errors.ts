export const swallow = (fn?: (err: any) => boolean) => (err: any) => {
    if (fn === undefined || fn(err)) {
        return
    }
    throw err
}
