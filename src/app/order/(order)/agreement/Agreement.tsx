import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { CheckBox } from '@/components/form';
import { ORDER_AGREEMENT } from '@/constants/order';
import { AgreementFormData } from '@/types/form';

const Agreement = () => {
  const { control } = useFormContext<AgreementFormData>();

  return (
    <StAgreementSection>
      {ORDER_AGREEMENT.map((item) => (
        <CheckBox
          key={item.id}
          name={`agreement.${item.id}`}
          label={item.label}
          control={control}
        />
      ))}
    </StAgreementSection>
  );
};

export default Agreement;

const StAgreementSection = styled.div`
  padding: 3rem 2.8rem 9.1rem 2.8rem;
`;
