import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { Input } from '@/components/form';

import { StInfoTitle } from '../productInfo/ProductInfo';

interface CustomerInfoFormData {
  name: string;
  phone: string;
}

const CustomerInfo = () => {
  const {
    control,
    formState: { errors },
  } = useForm<CustomerInfoFormData>();

  return (
    <StCustomerInfoSection>
      <StCustomerTitle>구매자 정보</StCustomerTitle>
      <Input name="name" label="이름" placeholder="홍길동" control={control} />
      <Input
        name="phone"
        label="전화번호"
        placeholder="010-1234-5678"
        control={control}
        maxLength={13}
      />
    </StCustomerInfoSection>
  );
};

export default CustomerInfo;

const StCustomerInfoSection = styled.div`
  padding: 4rem 2.8rem;
`;

const StCustomerTitle = styled(StInfoTitle)``;
