'use client';

import { useState } from 'react';
import { styled } from 'styled-components';

import { TextInput } from '@/components/input';

const OrderSearchForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const inputConfigs = [
    {
      id: 'name',
      label: '이름',
      placeholder: '홍길동',
      state: name,
      setState: setName,
    },
    {
      id: 'phone',
      label: '연락처',
      placeholder: '010-1234-5678',
      state: phone,
      setState: setPhone,
    },
    {
      id: 'password',
      label: '주문내역 조회 비밀번호',
      placeholder: '네자리 수 숫자 비밀번호',
      state: password,
      setState: setPassword,
    },
  ];

  return (
    <StOrderSearchForm>
      <h1>주문내역 조회</h1>
      <p>구매 시 입력했던 정보를 입력해주세요</p>
      <StSearchForm>
        {inputConfigs.map(({ id, state, label, placeholder, setState }) => (
          <TextInput
            key={id}
            value={state}
            label={label}
            placeholder={placeholder}
            onChange={(newValue) => setState(newValue)}
          />
        ))}
      </StSearchForm>
    </StOrderSearchForm>
  );
};

export default OrderSearchForm;

const StOrderSearchForm = styled.section`
  padding: 4.4rem 2.8rem;

  & > h1 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StSearchForm = styled.form`
  margin-top: 5rem;
`;
