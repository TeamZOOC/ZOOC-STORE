import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { Input } from '@/components/form';
import { buyerState } from '@/recoil/order/atom';

import { StInfoTitle } from '../productInfo/ProductInfo';

interface CustomerInfoFormData {
  buyerName: string;
  buyerPhone: string;
}

const CustomerInfo = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<CustomerInfoFormData>();
  const [buyerInfo, setBuyerInfo] = useRecoilState(buyerState);
  const buyerName = watch('buyerName');
  const buyerPhone = watch('buyerPhone');

  useEffect(() => {
    setBuyerInfo({ buyerName, buyerPhone });
  }, [buyerName, buyerPhone, setBuyerInfo]);

  console.log(buyerInfo);
  return (
    <StCustomerInfoSection>
      <StCustomerTitle>구매자 정보</StCustomerTitle>
      <StCustomerInput>
        <Input
          name="buyerName"
          label="이름"
          placeholder="홍길동"
          control={control}
          rules={{ required: true, maxLength: 7 }}
        />
        <Input
          name="buyerPhone"
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
