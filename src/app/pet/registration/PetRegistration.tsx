'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { Input } from '@/components/form';
import { useToast } from '@/hooks/toast';

interface PetRegistrationFormData {
  petName: string;
  breed: string;
}

const PetRegistration = () => {
  const { control, watch, handleSubmit } = useForm<PetRegistrationFormData>({
    mode: 'onChange',
  });
  const petName = watch('petName');
  const isFormFilled = petName?.trim().length > 0;

  const { showToast } = useToast();
  const router = useRouter();

  const onSubmit = (data: PetRegistrationFormData) => {
    console.log(data);
    router.push('/pet/registration/createmodel');
  };

  const onError = (errors: any) => {
    if (errors.petName) {
      showToast('pet_required');
    }
  };

  return (
    <>
      <StRegistration>
        <h2>반려동물의 정보를 입력해주세요</h2>
        <p>해당 정보는 상품 제작 및 관리에 활용돼요</p>
        <StRegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="petName"
            label="이름"
            placeholder="사랑이"
            control={control}
            rules={{ required: true, maxLength: 5 }}
            showCount
          />
          <Input
            name="breed"
            label="종"
            placeholder="포메라니안"
            control={control}
            rules={{ maxLength: 20 }}
            showCount
          />
        </StRegistrationForm>
      </StRegistration>
      <BottomButton
        btnName="반려동물 AI 모델 생성하기"
        btnType="button"
        disabled={!isFormFilled}
        activeFunc={handleSubmit(onSubmit, onError)}
      />
    </>
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
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 6rem;
`;
