import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { StInputLabel, StRequired } from '@/components/form/TextInput';
import { useModal } from '@/hooks/modal';
import { addressState } from '@/recoil/order/atom';

const AddressInput = () => {
  const [savedAddress, setSavedAddress] = useRecoilState(addressState);
  const { control, setValue } = useFormContext();
  const { openModal } = useModal();

  const { field: postcodeField, fieldState: postcodeFieldState } =
    useController({
      name: 'address.postcode',
      control,
      rules: { required: true, maxLength: 8 },
      defaultValue: savedAddress.postcode,
    });

  const { field: addressField, fieldState: addressFieldState } = useController({
    name: 'address.address',
    control,
    rules: { required: true, maxLength: 30 },
    defaultValue: savedAddress.address,
  });

  const { field: detailAddressField } = useController({
    name: 'address.detailAddress',
    control,
    defaultValue: savedAddress.detailAddress,
  });

  useEffect(() => {
    setValue('address.postcode', savedAddress.postcode);
    setValue('address.address', savedAddress.address);
    setValue('address.detailAddress', savedAddress.detailAddress);
  }, [savedAddress, control]);

  return (
    <SrAddressForm>
      <StLabel>
        배송지
        <StRequiredCircle />
      </StLabel>
      <StAddress>
        <StZipCodeInput
          {...postcodeField}
          type="number"
          placeholder="우편번호"
          readOnly
          onChange={(e) => {
            postcodeField.onChange(e);
            setSavedAddress({ ...savedAddress, postcode: e.target.value });
          }}
          $isError={!!postcodeFieldState.error}
        />
        <StAddressSearchBtn
          type="button"
          onClick={() => {
            openModal('postcode');
          }}
        >
          주소 검색
        </StAddressSearchBtn>
      </StAddress>
      <StAddressInput
        {...addressField}
        type="text"
        placeholder="주소"
        readOnly
        onChange={(e) => {
          addressField.onChange(e);
          setSavedAddress({ ...savedAddress, address: e.target.value });
        }}
        $isError={!!addressFieldState.error}
      />
      <StDetailAddressInput
        {...detailAddressField}
        type="text"
        placeholder="상세주소"
        onChange={(e) => {
          detailAddressField.onChange(e);
          setSavedAddress({ ...savedAddress, detailAddress: e.target.value });
        }}
      />
    </SrAddressForm>
  );
};

export default AddressInput;

const SrAddressForm = styled.div``;

const StLabel = styled(StInputLabel)``;

const StRequiredCircle = styled(StRequired)``;

const StAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StAddressInput = styled.input<{ $isError?: boolean }>`
  width: 100%;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  box-sizing: border-box;

  border-radius: 0.2rem;
  border: 0.1rem solid
    ${({ $isError, theme }) =>
      $isError ? '#FF453A' : theme.colors.zw_brightgray};
  background: ${({ theme }) => theme.colors.zw_background};
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};

  ::placeholder {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StZipCodeInput = styled(StAddressInput)``;

const StAddressSearchBtn = styled.button`
  min-width: 12.5rem;
  height: 5rem;
  margin-top: 1rem;

  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead4};
`;

const StDetailAddressInput = styled(StAddressInput)``;
