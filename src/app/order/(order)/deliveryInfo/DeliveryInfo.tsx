import { styled } from 'styled-components';

import { useTab } from '@/hooks/tab';

import { StInfoTitle } from '../productInfo/ProductInfo';
import ExistingAddressList from './ExistingAddressList';
import NewDeliveryForm from './NewDeliveryForm';

const DeliveryInfo = () => {
  const DELIVERY_TAB = ['기존 배송지', '신규입력'];
  const { activeTab, setActiveTab } = useTab({
    tabList: DELIVERY_TAB,
    defaultTabIndex: 1,
  });

  const handleSameAsBuyer = () => {};

  return (
    <StDeliveryInfoSection>
      <StDeliveryTitle>
        배송 정보
        <StSameAsBuyerBtn type="button" onClick={handleSameAsBuyer}>
          구매자와 동일해요
        </StSameAsBuyerBtn>
      </StDeliveryTitle>
      <StDeliveryTabs>
        {DELIVERY_TAB.map((addressTab, index) => (
          <StDeliveryTab
            type="button"
            onClick={() => setActiveTab(index)}
            $isActiveTab={activeTab === addressTab}
          >
            {addressTab}
          </StDeliveryTab>
        ))}
      </StDeliveryTabs>
      <StAddressForm>
        {activeTab === '신규입력' && <NewDeliveryForm />}
        {activeTab === '기존 배송지' && <ExistingAddressList />}
      </StAddressForm>
    </StDeliveryInfoSection>
  );
};

export default DeliveryInfo;

const StDeliveryInfoSection = styled.div`
  padding: 2rem 2.8rem;
`;

const StDeliveryTitle = styled(StInfoTitle)`
  display: flex;
  justify-content: space-between;
`;

const StSameAsBuyerBtn = styled.button`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_gray};
`;

const StDeliveryTabs = styled.div`
  display: flex;
  gap: 2.3rem;

  margin-bottom: 2rem;
`;

const StDeliveryTab = styled.button<{ $isActiveTab: boolean }>`
  height: 3rem;

  ${({ theme, $isActiveTab }) =>
    $isActiveTab
      ? `
    color: ${theme.colors.zw_point};
    border-bottom: 0.2rem solid ${theme.colors.zw_point};
    ${theme.fonts.zw_Subhead3};
  `
      : `
    color: ${theme.colors.zw_lightgray};
    border-bottom: 0.2rem solid transparent;
    ${theme.fonts.zw_Body1};
  `}
`;

const StAddressForm = styled.div``;
