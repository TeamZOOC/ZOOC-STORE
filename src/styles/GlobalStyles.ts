'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}


#root, body, html {
  width: 100vw;
  height: 100dvh;
  max-width: 43rem;
  margin: 0 auto;
  overflow-y: auto;
  
  background-color: ${({ theme }) => theme.colors.zw_background};
  font-size: 62.5%;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  box-sizing: border-box;
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

  a {
    text-decoration: none;
    color: inherit; 
  }
`;

export default GlobalStyles;
