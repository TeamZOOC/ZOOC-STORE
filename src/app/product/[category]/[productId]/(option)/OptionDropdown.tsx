'use client';

import { styled } from 'styled-components';

const OptionDropdown = () => (
  <StOptionDropdown>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
    <StOptionDropdownItem>아이폰 13</StOptionDropdownItem>
  </StOptionDropdown>
);
export default OptionDropdown;
const StOptionDropdown = styled.ul`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  height: fit-content;
  max-height: 23.6rem;
  padding: 2.4rem 0 2.4rem 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.6rem 0.6rem 0 0;
  background-color: ${({ theme }) => theme.colors.zw_background};
  overflow-y: scroll;
`;
const StOptionDropdownItem = styled.li`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
  & + & {
    margin-top: 2.2rem;
  }
`;
