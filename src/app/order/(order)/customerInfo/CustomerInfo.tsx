import { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { Input } from '@/components/form';
import { buyerState } from '@/recoil/order/atom';

import { StInfoTitle } from '../productInfo/ProductInfo';

interface CustomerInfoFormData {
  orderer: {
    name: string;
    phone: string;
  };
}

const CustomerInfo = () => {
  const { control, watch } = useFormContext<CustomerInfoFormData>();
  const [, setBuyerInfo] = useRecoilState(buyerState);
  const buyerName = watch('orderer.name');
  const buyerPhone = watch('orderer.phone');
  const methods = useForm();

  useEffect(() => {
    setBuyerInfo({ buyerName, buyerPhone });
  }, [buyerName, buyerPhone, setBuyerInfo]);

  return (
    <FormProvider {...methods}>
      <StCustomerInfoSection>
        <StCustomerTitle>구매자 정보</StCustomerTitle>
        <StCustomerInput>
          <Input
            name="orderer.name"
            label="이름"
            placeholder="홍길동"
            control={control}
            rules={{ required: true, maxLength: 7 }}
          />
          <Input
            name="orderer.phone"
            label="연락처"
            placeholder="010-1234-5678"
            control={control}
            rules={{ required: true, maxLength: 15 }}
          />
        </StCustomerInput>
      </StCustomerInfoSection>
    </FormProvider>
  );
};

export default CustomerInfo;

const StCustomerInfoSection = styled.div`
  padding: 4rem 2.8rem 2rem 2.8rem;
`;

const StCustomerTitle = styled(StInfoTitle)``;

const StCustomerInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
