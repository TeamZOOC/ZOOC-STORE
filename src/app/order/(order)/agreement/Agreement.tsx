import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { CheckBox } from '@/components/form';
import { ORDER_AGREEMENT } from '@/constants/order';

interface AgreementFormData {
  agreement: {
    checkOrder: boolean;
    privacyPolicy: boolean;
    thirdParty: boolean;
  };
}

const Agreement = () => {
  const { control } = useFormContext<AgreementFormData>();

  return (
    <StAgreementSection>
      <form>
        {ORDER_AGREEMENT.map((item) => (
          <CheckBox
            key={item.id}
            name={`agreement.${item.id}`}
            label={item.label}
            control={control}
          />
        ))}
      </form>
    </StAgreementSection>
  );
};

export default Agreement;

const StAgreementSection = styled.div`
  padding: 3rem 2.8rem 9.1rem 2.8rem;
`;
