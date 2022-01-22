const notNullFilter = <T>(arg: T | null | undefined): arg is T => arg !== null && arg !== undefined

export default notNullFilter
