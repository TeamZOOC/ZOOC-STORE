import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore } from '../../../public/icons';
import React from '../modal/ImageValidateModal';

interface CheckboxProps {
  id: string;
  label: string;
}
const Checkbox = ({ id, label }: CheckboxProps) => {
  const { register, watch } = useFormContext();
  const isChecked = watch(id);

  return (
    <StCheckboxLabel htmlFor={id}>
      <StCheckbox {...register(id)} type="checkbox" id={id} />
      <StCheckIconWrapper>
        {isChecked ? <IcCheckboxAfter /> : <IcCheckboxBefore />}
      </StCheckIconWrapper>
      <span>{label}</span>
    </StCheckboxLabel>
  );
};

export default Checkbox;

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
