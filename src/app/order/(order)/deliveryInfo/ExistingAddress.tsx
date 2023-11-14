import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { TextInput } from '@/components/form';
import { DetailInfo } from '@/components/order';

import { IcRadioAfter, IcRadioBefore } from '../../../../../public/icons';

interface ExistingAddressProps {
  addressId: number;
}

const ExistingAddress = ({ addressId }: ExistingAddressProps) => {
  const { register, watch, control, setValue } = useFormContext();
  const selectedAddress = watch('selectedAddress');

  const handleRadioClick = () => {
    setValue('selectedAddress', addressId);
  };

  return (
    <StExistingAddress
      $isSelected={selectedAddress === addressId}
      onClick={handleRadioClick}
    >
      <StName>
        {selectedAddress === addressId ? <IcRadioAfter /> : <IcRadioBefore />}
        <input
          type="radio"
          value={addressId}
          {...register('selectedAddress')}
        />
        손애진
      </StName>
      <StAddressInfo>
        <DetailInfo label="연락처" value="010-4056-6111" />
        <DetailInfo
          label="배송지"
          value="(10803) 서울특별시 노원구 공릉로 26길 42 해마루 403호"
        />
      </StAddressInfo>
      {selectedAddress === addressId && (
        <StRequest>
          <StLabel htmlFor="request">요청사항</StLabel>
          <TextInput
            name="request"
            placeholder="안전한 배송 부탁드립니다."
            control={control}
          />
        </StRequest>
      )}
    </StExistingAddress>
  );
};

export default ExistingAddress;

const StExistingAddress = styled.div<{ $isSelected: boolean }>`
  padding: 2.4rem;

  border-radius: 0.2rem;
  border: ${({ $isSelected, theme }) =>
    $isSelected
      ? `0.13rem solid  ${theme.colors.zw_point}`
      : `0.13rem solid ${theme.colors.zw_brightgray}`};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
`;

const StName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};

  & > input {
    display: none;
  }
`;

const StAddressInfo = styled.div`
  margin-top: 1.6rem;

  & > p {
    display: grid;
    grid-template-columns: 2.5fr 7.5fr;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
  & > p:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  & > p > strong {
    margin-top: 0.1rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Subhead4};
  }
`;

const StRequest = styled.div`
  margin-top: 2rem;
`;

const StLabel = styled.label`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Subhead4};
`;
