import { Control, useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore } from '../../../public/icons';
import React from '../modal/ImageValidateModal';

interface CheckBoxProps {
  name: string;
  label: string;
  labelColor?: string;
  control: Control<any>;
}

const CheckBox = ({ name, label, control, labelColor }: CheckBoxProps) => {
  const { formState } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: false,
  });
  const { onChange, ...restField } = field;
  const isError = formState.isSubmitted && fieldState.invalid;

  return (
    <StCheckboxLabel htmlFor={name} $labelColor={labelColor}>
      <StCheckbox
        id={name}
        checked={field.value}
        onChange={onChange}
        type="checkbox"
        {...restField}
      />
      <StCheckIconWrapper $isError={isError}>
        {field.value ? (
          <IcCheckboxAfter className="checkAfter" />
        ) : (
          <IcCheckboxBefore className="checkBefore" />
        )}
      </StCheckIconWrapper>
      <span>{label}</span>
    </StCheckboxLabel>
  );
};

export default CheckBox;

const StCheckboxLabel = styled.label<{ $labelColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  & > span {
    color: ${({ $labelColor, theme }) => $labelColor || theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StCheckIconWrapper = styled.div<{ $isError: boolean }>`
  position: relative;

  width: 3.6rem;
  height: 3.6rem;

  & > .checkBefore {
    & > rect {
      stroke: ${({ $isError, theme }) =>
        $isError ? '#FF453A' : theme.colors.zw_lightgray};
    }
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
