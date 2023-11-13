import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import Checkbox from '@/components/checkbox/CheckBox';

const ORDER_AGREEMENT = [
  {
    id: 'order-confirmation',
    label: '주문 내역을 모두 확인했으며, 동의합니다.',
  },
  {
    id: 'privacy-policy-agreement',
    label: '개인정보 이용약관 동의 (필수)',
  },
  {
    id: 'third-party-consent',
    label: '제3자 정보제공 동의 (필수)',
  },
];

const Agreement = () => {
  const methods = useForm({});

  const onSubmit = () => {};

  return (
    <StAgreementSection>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {ORDER_AGREEMENT.map(({ id, label }) => (
            <Checkbox id={id} key={id} label={label} />
          ))}
        </form>
      </FormProvider>
    </StAgreementSection>
  );
};

export default Agreement;

const StAgreementSection = styled.div`
  padding: 3rem 2.8rem 9.1rem 2.8rem;
`;
