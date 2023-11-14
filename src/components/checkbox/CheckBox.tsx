import { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore } from '../../../public/icons';
import React from '../modal/ImageValidateModal';

interface CheckBoxProps {
  options: string[];
  control: Control<any>;
  name: string;
}
const CheckBox = ({ options, control, name }: CheckBoxProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue: [],
  });
  const [value, setValue] = useState<string[]>(
    Array.isArray(field.value) ? field.value : [],
  );

  const handleChange = (option: string, isChecked: boolean) => {
    const newValue = isChecked
      ? [...value, option]
      : value.filter((item) => item !== option);

    field.onChange(newValue);
    setValue(newValue);
  };

  return (
    <>
      {options.map((option) => (
        <StCheckboxLabel htmlFor={option} key={option}>
          <StCheckbox
            id={option}
            key={option}
            onChange={(e) => handleChange(option, e.target.checked)}
            checked={value.includes(option)}
            type="checkbox"
            value={option}
          />
          <StCheckIconWrapper>
            {value.includes(option) ? (
              <IcCheckboxAfter />
            ) : (
              <IcCheckboxBefore />
            )}
          </StCheckIconWrapper>
          <span>{option}</span>
        </StCheckboxLabel>
      ))}
    </>
  );
};

export default CheckBox;

const StCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  & > span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StCheckIconWrapper = styled.div`
  position: relative;

  & > .checkBefore {
    display: block;
  }
  & > .checkAfter {
    display: none;
  }
`;

const StCheckbox = styled.input`
  display: none;

  &:checked + ${StCheckIconWrapper} > .checkBefore {
    display: none;
  }
  &:checked + ${StCheckIconWrapper} > .checkAfter {
    display: block;
  }
`;
