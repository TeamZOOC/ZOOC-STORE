import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { StInputLabel, StRequired } from '@/components/form/Input';
import { useModal } from '@/hooks/modal';
import { addressState } from '@/recoil/order/atom';

const AddressInput = () => {
  const [address, setAddress] = useRecoilState(addressState);
  const { openModal } = useModal();
  return (
    <SrAddressForm>
      <StLabel>
        배송지
        <StRequiredCircle />
      </StLabel>
      <StAddress>
        <StZipCodeInput
          type="number"
          id="zip_code"
          value={address.postcode}
          placeholder="우편번호"
          maxLength={5}
          readOnly
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
        type="text"
        id="address"
        value={address.address}
        placeholder="주소"
        maxLength={30}
        readOnly
      />
      <StDetailAddressInput
        type="text"
        id="addressDetail"
        placeholder="상세주소"
        maxLength={30}
      />
    </SrAddressForm>
  );
};

export default AddressInput;

const SrAddressForm = styled.div`
  margin-bottom: 2.4rem;
`;

const StLabel = styled(StInputLabel)``;

const StRequiredCircle = styled(StRequired)``;

const StAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StAddressInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  box-sizing: border-box;

  border-radius: 0.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
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
