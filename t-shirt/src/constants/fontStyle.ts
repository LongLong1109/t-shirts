export const FONT_SIZE = {
  XS: '14px',
  SM: '18px',
  MD: '40px',
  LG: '48px',
}

export const FONT_WEIGHT = {
  THIN: 'thin',
  HAIR_LINE: 'hairline',
  LIGHT: 'light',
  NORMAL: 'normal',
  MEDIUM: 'medium',
  SEMI_BOLD: 'semibold',
  BOLD: 'bold',
  EXTRA_BOLD: 'extrabold',
  BLACK: 'black',
}

export type FontSize = (typeof FONT_SIZE)[keyof typeof FONT_SIZE]
export type FontWeight = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT]
