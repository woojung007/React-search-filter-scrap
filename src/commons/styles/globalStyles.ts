import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

//  GlobalStyleComponent<IStyles,DefaultTheme>
// unknown
// interface IGlobalStyles {
//     children: ReactNode;
//   }
// 사용 결과 에러가 해결되지 않아서 any를 사용했습니다.
const GlobalStyles: any = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    outline: none;
    border: none;
}

`;

export default GlobalStyles;
