export const palette = {
  // Gray Scale
  background: "#292929",
  white: "#F8FAF9",
  gray50: "#EEEEEE",
  gray100: "#AFAFAF",
  gray200: "#898989",
  gray300: "#676767",
  gray400: "#353535",
  gray500: "#292929",
  black: "#181818",

  // core color
  coreBlue: "#4285F4",
  coreRed: "#EA4335",
  coreYellow: "#FBBC04",
  coreGreen: "#0F9D58",

  // red color
  red100: "#FFEBEE",
  red200: "#FFCDD2",
  red300: "#EF9A9A",
  red400: "#E57373",
  red500: "#EF5350",
  red600: "#F44336",

  // gren color
  green100: "#E8F5E9",
  green200: "#C8E6C9",
  green300: "#A5D6A7",
  green400: "#81C784",
  green500: "#66BB6A",
  green600: "#4CAF50",

  // yellow color
  yellow100: "#FFF8E1",
  yellow200: "#FFECB3",
  yellow300: "#FFE082",
  yellow400: "#FFC107",
  yellow500: "#FFCA28",
  yellow600: "#FFC107",

  // blue color
  blue100: "#E3F2FD",
  blue200: "#BBDEFB",
  blue300: "#90CAF9",
  blue400: "#64B5F6",
  blue500: "#42A5F5",
  blue600: "#2196F3",

  // orange for default
  orange: "#F36B08",
  orange200: "#F6BF97",
  orange400: "#F37D28",

  //PAGE main colors
  Main1: "#111111",
  Main2: "#222222",
  Main3: "#333333",
  Main4: "#444444",
  Main5: "#555555",
} as const;

export const colors = {
  primary: {
    red: palette.coreRed,
    yellow: palette.coreYellow,
    green: palette.coreGreen,
    blue: palette.coreBlue,
    black: palette.black,
    white: palette.white,
  },
  background: palette.background,
  text: {
    general: palette.gray50,
    bold: palette.white,
    dark: palette.black,
  },
  ui: {
    divider: palette.gray100,
    border: palette.gray100,
    hover: palette.gray50,
  },
} as const;

type PalleteType = typeof palette;
export type PalleteValueType = PalleteType[keyof PalleteType];
