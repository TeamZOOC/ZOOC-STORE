import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { Input } from '@/components/form';

import AddressInput from './AddressInput';

interface NewDeliveryInfoFormData {
  receiver: string;
  receiver_phone: string;
  address: string;
  request?: string;
}
const NewDeliveryForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<NewDeliveryInfoFormData>();

  return (
    <StNewDeliveryForm>
      <Input
        name="receiver"
        label="수령인"
        placeholder="홍길동"
        control={control}
        rules={{ required: true }}
      />
      <Input
        name="receiver_phone"
        label="연락처"
        placeholder="010-1234-5678"
        control={control}
        rules={{ required: true, maxLength: 13 }}
      />
      <AddressInput />
      <Input
        name="request"
        label="요청사항"
        placeholder="안전한 배송 부탁드립니다."
        control={control}
        rules={{ maxLength: 13 }}
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
