import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { TextInput } from '@/components/form';
import { buyerState } from '@/recoil/order/atom';
import { CustomerFormData } from '@/types/form';

import { StInfoTitle } from '../productsInfo/ProductsInfo';

const CustomerInfo = () => {
  const { control, watch } = useFormContext<CustomerFormData>();
  const [, setBuyerInfo] = useRecoilState(buyerState);
  const buyerName = watch('orderer.name');
  const buyerPhone = watch('orderer.phone');

  useEffect(() => {
    setBuyerInfo({ buyerName, buyerPhone });
  }, [buyerName, buyerPhone, setBuyerInfo]);

  return (
    <StCustomerInfoSection>
      <StCustomerTitle>구매자 정보</StCustomerTitle>
      <StCustomerInput>
        <TextInput
          name="orderer.name"
          label="이름"
          placeholder="홍길동"
          control={control}
          rules={{ required: true, maxLength: 20 }}
        />
        <TextInput
          name="orderer.phone"
          label="연락처"
          placeholder="010-1234-5678"
          control={control}
          rules={{ required: true, maxLength: 15 }}
        />
      </StCustomerInput>
    </StCustomerInfoSection>
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
