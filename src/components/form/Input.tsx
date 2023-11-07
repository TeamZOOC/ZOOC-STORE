import React from 'react';
import { Control, useController } from 'react-hook-form';
import { styled } from 'styled-components';

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  rules?: Record<string, any>;
  pattern?: string;
  maxLength?: number;
  isRequired?: boolean;
}

function TextInput({
  name,
  label,
  placeholder,
  control,
  rules,
  pattern,
  maxLength,
  isRequired,
}: TextInputProps) {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });

  return (
    <StTextInput>
      <StInputLabel htmlFor={name}>
        {label}
        {isRequired && <StRequired />}
      </StInputLabel>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        {...field}
      />
    </StTextInput>
  );
}

export default TextInput;

const StTextInput = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    margin: 1rem 0 2.4rem 0;
    padding: 1.5rem 2rem;

    border-radius: 0.2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
    background: ${({ theme }) => theme.colors.zw_background};
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};

    ::placeholder {
      color: ${({ theme }) => theme.colors.zw_black};
      ${({ theme }) => theme.fonts.zw_Body1};
    }
  }
`;

export const StInputLabel = styled.label`
  display: flex;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_Subhead4};
`;

export const StRequired = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.25rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.zw_point};
`;
