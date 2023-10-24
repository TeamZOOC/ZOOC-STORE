import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

@import url('https://webfontworld.github.io/gmarket/GmarketSans.css');

#root, body, html {
  width: 100vw;
  height: 100dvh;
  max-width: 43rem;
  margin: 0 auto;
  overflow-y: auto;
  
  background-color: #fff;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
  button {
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
