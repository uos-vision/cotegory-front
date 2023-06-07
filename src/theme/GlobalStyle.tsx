import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'); /* 구글 폰트에서 Roboto 폰트를 가져옴 */
    font-family: 'Roboto', sans-serif; /* Roboto 폰트를 적용 */
`;

export default GlobalStyle;
