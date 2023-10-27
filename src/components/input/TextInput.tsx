/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from 'styled-components';

interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
}

const TextInput = ({ id, label, placeholder }: TextInputProps) => (
  <StTextInput>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} placeholder={placeholder} />
  </StTextInput>
);
export default TextInput;

const StTextInput = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Subhead4};
  }
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
