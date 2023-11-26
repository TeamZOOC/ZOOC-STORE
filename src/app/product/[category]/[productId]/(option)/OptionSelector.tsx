/* eslint-disable react/no-array-index-key */

'use client';

import { css, styled } from 'styled-components';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productOptionState } from '@/recoil/product/atom';
import { selectedOptionsState } from '@/recoil/option/atom';
import { OptionInfo } from '@/types/cart';
import { useToast } from '@/hooks/toast';
import { IcDropDown, IcDropDownActive } from '../../../../../../public/icons';
import OptionDropdown from './OptionDropdown';

const OptionSelector = () => {
  const { showToast } = useToast();
  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsState);
  const productOption = useRecoilValue(productOptionState);
  const [isDropdownToggle, setIsDropdownToggle] = useState(
    Array(productOption.length).fill(false),
  );
  const [tempOption, setTempOption] = useState<OptionInfo | null>(null);
  const [selectedOptionName, setSelectedOptionName] = useState<string[]>([
    '',
    '',
  ]);

  const handleDropdownToggle = (index: number) => {
    setIsDropdownToggle((prevToggleState) =>
      prevToggleState.map((currentState, idx) =>
        idx === index ? !currentState : false,
      ),
    );
  };

  const handleOptionSelect = (option: OptionInfo) => {
    // option의 optionIndex를 이용해서 selectedOptionName에 옵션 이름 저장
    setSelectedOptionName((prevNames) => {
      const newNames = [...prevNames];
      newNames[option.optionIndex] = option.name;
      return newNames;
    });

    if (productOption.length === 1) {
      const isDuplicate = selectedOptions.some(
        ([first]) => first.id === option.id,
      );

      if (!isDuplicate) {
        setSelectedOptions((prevOptions) => [...prevOptions, [option]]);
      } else {
        showToast('option_duplicated');
      }
      setSelectedOptionName(['', '']); // 선택된 옵션 이름 초기화
    } else if (tempOption) {
      // 첫 번째 선택된 옵션(tempOption)과 두 번째 선택된 옵션(option)을
      // 하나의 배열로 묶어서 selectedOptions 배열에 추가
      const isDuplicate = selectedOptions.some(
        ([first, second]) =>
          (first.id === tempOption.id && second.id === option.id) ||
          (first.id === option.id && second.id === tempOption.id),
      );

      if (!isDuplicate) {
        setSelectedOptions((prevOptions) => [
          ...prevOptions,
          [tempOption, option],
        ]);
      } else {
        showToast('option_duplicated');
      }

      setTempOption(null); // 임시 옵션 초기화
      setSelectedOptionName(['', '']); // 선택된 옵션 이름 초기화
    } else {
      // 첫 번째 옵션을 선택
      setTempOption(option);
    }
  };

  return productOption.map(({ name, optionDetails }, index) => (
    <StOptionSelector
      $active={selectedOptionName[index] !== ''}
      key={name}
      onClick={() => handleDropdownToggle(index)}
    >
      {isDropdownToggle[index] && (
        <OptionDropdown
          optionIndex={index}
          productOptionList={optionDetails}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {selectedOptionName[index] === '' ? (
        <span>{name} 선택</span>
      ) : (
        <span>{selectedOptionName[index]}</span>
      )}
      {selectedOptionName[index] === '' ? <IcDropDown /> : <IcDropDownActive />}
    </StOptionSelector>
  ));
};
export default OptionSelector;

const StOptionSelector = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
  height: 5rem;
  & + & {
    margin-top: 2rem;
  }
  padding: 0 1.2rem 0 2rem;

  ${({ $active }) =>
    $active
      ? css`
          border: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
          span {
            color: ${({ theme }) => theme.colors.zw_black};
            ${({ theme }) => theme.fonts.zw_Body1};
          }
        `
      : css`
          border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
          span {
            color: ${({ theme }) => theme.colors.zw_lightgray};
            ${({ theme }) => theme.fonts.zw_Body1};
          }
        `}

  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_background};

  transition: all 0.2s;
`;
