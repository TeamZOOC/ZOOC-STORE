import { css } from 'styled-components';

export const fonts = {
  zw_price_big: css`
    font-family: var(--font-gmarketsans-bold);
    font-size: 2.2rem;
    font-style: normal;
    /* font-weight: 500; */
    line-height: normal;
  `,
  zw_price_middle: css`
    font-family: var(--font-gmarketsans-medium);
    font-size: 1.5rem;
    font-style: normal;
    /* font-weight: 400; */
    line-height: normal;
  `,
  zw_price_small: css`
    font-family: var(--font-gmarketsans-medium);
    font-size: 1.2rem;
    font-style: normal;
    /* font-weight: 400; */
    line-height: normal;
  `,
  zw_Subhead1: css`
    font-family: var(--font-pretendard-semi-bold);
    font-size: 1.8rem;
    font-style: normal;
    /* font-weight: 600; */
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  zw_Subhead2: css`
    font-family: var(--font-pretendard-medium);
    font-size: 1.8rem;
    font-style: normal;
    /* font-weight: 500; */
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  zw_Subhead3: css`
    font-family: var(--font-pretendard-semi-bold);
    font-size: 1.6rem;
    font-style: normal;
    /* font-weight: 600; */
    line-height: normal;
  `,
  zw_Subhead4: css`
    font-family: var(--font-pretendard-medium);
    font-size: 1.4rem;
    font-style: normal;
    /* font-weight: 500; */
    line-height: normal;
    letter-spacing: -0.0042rem;
  `,
  zw_Body1: css`
    font-family: var(--font-pretendard-regular);
    font-size: 1.6rem;
    font-style: normal;
    /* font-weight: 400; */
    line-height: 2rem; /* 125% */
    letter-spacing: -0.0048rem;
  `,
  zw_Body2: css`
    font-family: var(--font-pretendard-regular);
    font-size: 1.4rem;
    font-style: normal;
    /* font-weight: 400; */
    line-height: 2rem; /* 142.857% */
    letter-spacing: -0.03rem;
  `,
  zw_caption: css`
    font-family: var(--font-pretendard-regular);
    font-size: 1.4rem;
    font-style: normal;
    /* font-weight: 400; */
    line-height: normal;
    letter-spacing: -0.0042rem;
  `,
};

export const colors = {
  zw_point: '#5B7FFF',
  zw_black: '#262626',
  zw_darkgray: '#606060',
  zw_gray: '#828282',
  zw_lightgray: '#BFBFBF',
  zw_brightgray: '#E6E6E6',
  zw_white: '#fff',
  zw_background: '#F5F5F7',
};

export const zIndex = {
  zw_header: 100,
  zw_tab: 150,
  zw_modal: 200,
  zw_toast: 200,
};

export const theme = {
  colors,
  fonts,
  zIndex,
};
