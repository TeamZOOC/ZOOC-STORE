import { styled } from 'styled-components';

import { IcRadioBefore } from '../../../../../public/icons';
import { StInfoTitle } from '../productInfo/ProductInfo';

const PaymentMethod = () => (
  <StPaymentInfoSection>
    <StPaymentTitle>결제 수단</StPaymentTitle>
    <StPaymentMethod>
      <IcRadioBefore />
      <StRadioInput htmlFor="noAccount">
        무통장 입금
        <input type="radio" name="noAccount" value="noAccount" checked />
      </StRadioInput>
    </StPaymentMethod>
    <StDescription>현재 결제 수단은 무통장 입금만 가능합니다.</StDescription>
    <StDescription>
      추후 업데이트에 다른 결제 수단이 추가될 예정입니다.
    </StDescription>
  </StPaymentInfoSection>
);

export default PaymentMethod;

const StPaymentInfoSection = styled.div`
  padding: 4rem 2.8rem;
`;

const StPaymentTitle = styled(StInfoTitle)``;

const StPaymentMethod = styled.div`
  display: flex;
  gap: 1.2rem;

  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;

const StRadioInput = styled.label`
  & > input {
    display: none;
  }
`;

const StDescription = styled.p`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;
