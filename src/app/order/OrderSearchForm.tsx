/* eslint-disable react/jsx-props-no-spreading */

'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { TextInput } from '@/components/input';

import { IcKey } from '../../../public/icons';

type OrderSearchFormData = {
  name: string;
  phone: string;
  password: number;
};

const OrderSearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSearchFormData>();

  const onSubmit = async (data: OrderSearchFormData) => {
    await new Promise((r) => {
      setTimeout(r, 1_000);
    });
    console.log(JSON.stringify(data));
  };

  return (
    <StOrderSearchForm>
      <h1>주문내역 조회</h1>
      <p>구매 시 입력했던 정보를 입력해주세요</p>
      <StSearchForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id="name"
          label="이름"
          placeholder="홍길동"
          {...register('name')}
        />
        <TextInput
          id="phone"
          label="전화번호"
          placeholder="010-1234-5678"
          {...register('phone')}
        />
        <TextInput
          id="password"
          label="주문내역 조회 비밀번호"
          placeholder="네자리 수 숫자 비밀번호"
          {...register('password')}
        />
        <StForgetPassword>
          <IcKey />
          <Link href="https://github.com/TeamZOOC/ZOOC-STORE">
            조회 비밀번호를 잊어버리셨나요?
          </Link>
        </StForgetPassword>
        <button type="submit">주문내역 조회하기</button>
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

const StForgetPassword = styled.p`
  text-align: center;
  margin-top: 12.3rem;

  & > a {
    margin-left: 0.65rem;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_caption};
  }
`;
