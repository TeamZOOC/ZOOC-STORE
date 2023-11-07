import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { Input } from '@/components/form';

interface DeliveryInfoFormData {
  receiver: string;
  receiver_phone: string;
  address: string;
  request?: string;
}
const DeliveryForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<DeliveryInfoFormData>();

  return (
    <StDeliveryForm>
      <Input
        name="receiver"
        label="수령인"
        placeholder="홍길동"
        control={control}
        isRequired
      />
      <Input
        name="receiver_phone"
        label="연락처"
        placeholder="010-1234-5678"
        control={control}
        maxLength={13}
        isRequired
      />
      <Input
        name="request"
        label="요청사항"
        placeholder="안전한 배송 부탁드립니다."
        control={control}
        maxLength={30}
      />
    </StDeliveryForm>
  );
};

export default DeliveryForm;

const StDeliveryForm = styled.form``;
