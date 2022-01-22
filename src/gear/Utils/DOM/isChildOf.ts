const isChildOf = (el: Element | null | undefined, parent: Element): boolean => {
    if (!el) {
        return false
    }
    if (el === parent) {
        return true
    }
    return isChildOf(el.parentElement, parent)
}

export default isChildOf
