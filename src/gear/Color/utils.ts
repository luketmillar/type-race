import Color from 'color'

export const darken = (color: string, value: number): string => Color(color).darken(value).string()
export const alpha = (color: string, value: number): string => Color(color).alpha(value).string()
export const lighten = (color: string, value: number): string => Color(color).lighten(value).string()
