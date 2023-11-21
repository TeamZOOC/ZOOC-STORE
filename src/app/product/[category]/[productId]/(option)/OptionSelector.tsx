/* eslint-disable react/no-array-index-key */

'use client';

import { styled } from 'styled-components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productOptionState } from '@/recoil/product/atom';
import { IcDropDown } from '../../../../../../public/icons';
import OptionDropdown from './OptionDropdown';

const OptionSelector = () => {
  const productOption = useRecoilValue(productOptionState);
  const [isDropdownToggle, setIsDropdownToggle] = useState(
    Array(productOption.length).fill(false),
  );

  const handleDropdownToggle = (index: number) => {
    setIsDropdownToggle((prevToggleState) => {
      const newToggleState = [...prevToggleState];
      newToggleState[index] = !newToggleState[index];
      return newToggleState;
    });
  };

  return productOption.map(({ name, optionDetails }, index) => (
    <StOptionSelector key={name} onClick={() => handleDropdownToggle(index)}>
      {isDropdownToggle[index] && (
        <OptionDropdown productOptionList={optionDetails} />
      )}
      <span>{name} 선택</span>
      <IcDropDown />
    </StOptionSelector>
  ));
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
