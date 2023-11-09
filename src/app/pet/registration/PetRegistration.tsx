'use client';

import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { Input } from '@/components/form';

interface DeliveryInfoFormData {
  petName: string;
  breed: string;
}

const PetRegistration = () => {
  const {
    control,
    formState: { errors },
  } = useForm<DeliveryInfoFormData>();

  return (
    <StRegistration>
      <h2>반려동물의 정보를 입력해주세요</h2>
      <p>해당 정보는 상품 제작 및 관리에 활용돼요</p>
      <StRegistrationForm>
        <Input
          name="petName"
          label="이름"
          placeholder="사랑이"
          control={control}
          isRequired
        />
        <Input
          name="breed"
          label="종"
          placeholder="포메라니안"
          control={control}
          maxLength={20}
        />
      </StRegistrationForm>
    </StRegistration>
  );
};

export default PetRegistration;

const StRegistration = styled.div`
  padding-top: 3.8rem;

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StRegistrationForm = styled.form`
  margin-top: 6rem;
`;
