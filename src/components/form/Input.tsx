/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
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
  showCount?: boolean;
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
  showCount,
}: TextInputProps) {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });
  const [inputLength, setInputLength] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue =
      maxLength && value.length > maxLength ? value.slice(0, maxLength) : value;
    field.onChange(newValue);
    setInputLength(newValue.length);
  };

  useEffect(() => {
    setInputLength(field.value.length);
  }, [field.value]);

  return (
    <StTextInput>
      <StInputLabel htmlFor={name}>
        {label}
        {isRequired && <StRequired />}
      </StInputLabel>
      <StInputWrapper $isFocused={isFocused}>
        <input
          type="text"
          id={name}
          placeholder={placeholder}
          pattern={pattern}
          maxLength={maxLength}
          {...field}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
        />
        {showCount && maxLength && (
          <StLengthCounter
            $isMaxLength={inputLength >= maxLength}
            $isFocused={isFocused}
          >
            <span>{inputLength}</span>/{maxLength}
          </StLengthCounter>
        )}
      </StInputWrapper>
    </StTextInput>
  );
}

export default TextInput;

const StTextInput = styled.div`
  display: flex;
  flex-direction: column;
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

const StInputWrapper = styled.div<{ $isFocused: boolean }>`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    margin: 1rem 0 2.4rem 0;
    padding: 1.5rem 2rem;
    box-sizing: border-box;

    border-radius: 0.2rem;
    border: 0.15rem solid
      ${({ $isFocused, theme }) =>
        $isFocused ? theme.colors.zw_point : theme.colors.zw_brightgray};
    background: ${({ theme }) => theme.colors.zw_background};
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.zw_lightgray};
      ${({ theme }) => theme.fonts.zw_Body1};
    }
  }
`;

const StLengthCounter = styled.div<{
  $isFocused: boolean;
  $isMaxLength: boolean;
}>`
  position: absolute;
  right: 2rem;
  bottom: 4.3rem;

  color: ${({ $isMaxLength, theme }) =>
    $isMaxLength ? theme.colors.zw_point : theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_price_small};

  & > span {
    color: ${({ $isFocused, $isMaxLength, theme }) =>
      $isMaxLength
        ? theme.colors.zw_point
        : $isFocused
        ? theme.colors.zw_point
        : theme.colors.zw_lightgray};
  }
`;
