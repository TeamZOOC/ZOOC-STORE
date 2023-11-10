'use client';

import { styled } from 'styled-components';
import { useState } from 'react';
import { IcDropDown } from '../../../../../../public/icons';
import OptionDropdown from './OptionDropdown';

const OptionSelector = () => {
  const [isDropdownToggle, setIsDropdownToggle] = useState(false);
  return (
    <StOptionSelector onClick={() => setIsDropdownToggle(!isDropdownToggle)}>
      {isDropdownToggle && <OptionDropdown />}
      <span>기종 선택</span>
      <IcDropDown />
    </StOptionSelector>
  );
};
export default OptionSelector;
const StOptionSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 5rem;
  margin-bottom: 4rem;
  padding: 0 1.2rem 0 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_background};
  span {
    color: ${({ theme }) => theme.colors.zw_lightgray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;
