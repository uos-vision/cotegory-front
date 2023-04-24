import { colors, palette } from "./Color";

const theme = { palette, colors } as const;

export type Theme = typeof theme;

export default theme;
