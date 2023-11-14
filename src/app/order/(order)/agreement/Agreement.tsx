import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { CheckBox } from '@/components/checkbox';

const ORDER_AGREEMENT = [
  '주문 내역을 모두 확인했으며, 동의합니다.',
  '개인정보 이용약관 동의 (필수)',
  '제3자 정보제공 동의 (필수)',
];

interface AgreementFormData {
  agreement: {
    checkOrder: boolean;
    privacyPolicy: boolean;
    thirdParty: boolean;
  };
}

const Agreement = () => {
  const { control } = useForm<AgreementFormData>({
    defaultValues: {
      agreement: {
        checkOrder: false,
        privacyPolicy: false,
        thirdParty: false,
      },
    },
  });

  return (
    <StAgreementSection>
      <form>
        <CheckBox
          options={ORDER_AGREEMENT}
          name="agreement"
          control={control}
        />
      </form>
    </StAgreementSection>
  );
};

export default Agreement;

const StAgreementSection = styled.div`
  padding: 3rem 2.8rem 9.1rem 2.8rem;
`;
