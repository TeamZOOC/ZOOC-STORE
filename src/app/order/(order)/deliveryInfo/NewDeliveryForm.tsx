import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { Input } from '@/components/form';

import AddressInput from './AddressInput';

interface NewDeliveryFormProps {
  buyerName?: string;
  buyerPhone?: string;
}

interface NewDeliveryInfoFormData {
  receiver: {
    name: string;
    phone: string;
  };
  address: {
    address: string;
    postcode: string;
    detailAddress: string;
    request?: string;
  };
}

const NewDeliveryForm = ({ buyerName, buyerPhone }: NewDeliveryFormProps) => {
  const { control, setValue } = useFormContext<NewDeliveryInfoFormData>();

  useEffect(() => {
    if (buyerName) {
      setValue('receiver.name', buyerName);
    }
    if (buyerPhone) {
      setValue('receiver.phone', buyerPhone);
    }
  }, [buyerName, buyerPhone]);

  return (
    <StNewDeliveryForm>
      <Input
        name="receiver.name"
        label="수령인"
        placeholder="홍길동"
        control={control}
        rules={{ required: true }}
      />
      <Input
        name="receiver.phone"
        label="연락처"
        placeholder="010-1234-5678"
        control={control}
        rules={{ required: true, maxLength: 13 }}
      />
      <AddressInput />
      <Input
        name="address.request"
        label="요청사항"
        placeholder="안전한 배송 부탁드립니다."
        control={control}
        rules={{ maxLength: 30 }}
      />
    </StNewDeliveryForm>
  );
};

export default NewDeliveryForm;

const StNewDeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 2rem;
`;
