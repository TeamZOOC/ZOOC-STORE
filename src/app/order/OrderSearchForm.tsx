'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import * as Yup from 'yup';

import { Input } from '@/components/form';
import { useToast } from '@/hooks/useToast';

import { IcKey } from '../../../public/icons';

interface OrderSearchFormData {
  name: string;
  phone: string;
  password: string;
}
const schema = Yup.object({
  username: Yup.string().email().required(),
  password: Yup.string().matches().required(),
});

type FormData = Yup.InferType<typeof schema>;

const OrderSearchForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSearchFormData>({ resolver: yupResolver(schema) });
  const { showToast } = useToast();

  const onSubmit = (data: OrderSearchFormData) => {
    if (errors.password) {
      showToast(errors.password.message);
    }

    console.log(data);
  };

  return (
    <StOrderSearchForm>
      <h1>주문내역 조회</h1>
      <p>구매 시 입력했던 정보를 입력해주세요</p>
      <StSearchForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="이름"
          placeholder="홍길동"
          control={control}
        />
        <Input
          name="phone"
          label="전화번호"
          placeholder="010-1234-5678"
          control={control}
          maxLength={13}
        />
        <Input
          name="password"
          label="주문내역 조회 비밀번호"
          placeholder="네자리 수 숫자 비밀번호"
          control={control}
          rules={{
            validate: (value: string) =>
              /^[0-9]{4}$/.test(value) ||
              '비밀번호는 네 자리의 숫자만 가능합니다.',
          }}
          pattern="^[0-9]{4}$"
          maxLength={4}
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
function yupResolver(
  schema: any,
): import('react-hook-form').Resolver<OrderSearchFormData, any> | undefined {
  throw new Error('Function not implemented.');
}
