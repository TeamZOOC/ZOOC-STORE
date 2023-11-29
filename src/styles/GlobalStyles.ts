'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
  }

#nprogress .spinner {
  display: none;
}
#nprogress .bar {
  background: black;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}
#nprogress .peg {
  display:none;
}

#root, body, html {
  width: 100vw;
  height: 100lvh;
  max-width: 43rem;
  margin: 0 auto;
  overflow-y: auto;
  
  background-color: ${({ theme }) => theme.colors.zw_background};
  font-size: 62.5%;

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

  a {
    text-decoration: none;
    color: inherit; 
  }
`;

export default GlobalStyles;
