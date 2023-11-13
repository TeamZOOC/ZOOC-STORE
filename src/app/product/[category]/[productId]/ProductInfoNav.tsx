/* eslint-disable react/no-array-index-key */

'use client';

import { BottomButton } from '@/components/button';
import { MainLayout } from '@/components/layout';
import { TAB_LIST } from '@/constants/productTab';
import useTab from '@/hooks/tab/useTab';
import { css, styled } from 'styled-components';

const ProductInfoNav = () => {
  const { activeTab, setActiveTab } = useTab({
    tabList: TAB_LIST,
    defaultTabIndex: 0,
  });

  return (
    <>
      <StProductInfoNav>
        {TAB_LIST.map((tab, index) => (
          <StProductInfoNavItem
            key={index}
            $active={activeTab === tab}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </StProductInfoNavItem>
        ))}
      </StProductInfoNav>
      <MainLayout>
        <StProductInfoEmptySpace />
        {activeTab === '상품설명' && <StProductInfoImage />}
        {activeTab === '제품후기' && (
          <>
            <StProductInfoImage />
            <StProductInfoImage />
            <StProductInfoImage />
            <StProductInfoImage />
            <StProductInfoImage />
            <StProductInfoImage />
          </>
        )}
        {activeTab === '배송정보' && (
          <StProductShippingInfoWrapper>
            <StProductShippingInfo>
              <span>배송비</span>
              <div>
                <p>3,000 원ㅣ배송비에 관련된 정보</p>
                <p>제주도, 도서/산간 지역 추가 배송비 1,000원</p>
              </div>
            </StProductShippingInfo>
            <StProductShippingInfo>
              <span>배송기간</span>
              <p>평균 3일 이내 도착</p>
            </StProductShippingInfo>
          </StProductShippingInfoWrapper>
        )}
      </MainLayout>
      <BottomButton
        btnType="button"
        btnName="구매하기"
        disabled={false}
        activeFunc={() => {}}
      />
    </>
  );
};

export default ProductInfoNav;

const StProductInfoNav = styled.nav`
  position: sticky;
  top: 6.8rem;

  margin-top: 4.5rem;
  margin-left: 2.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};
`;

const StProductInfoNavItem = styled.button<{ $active: boolean }>`
  padding-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Subhead3};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.zw_black};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
    `}
  & + & {
    margin-left: 3.2rem;
  }
`;

const StProductInfoEmptySpace = styled.div`
  height: 1.4rem;
  background-color: transparent;
`;
const StProductInfoImage = styled.div`
  height: 24rem;
  background-color: #efefef;

  & + & {
    margin-top: 1rem;
  }
`;

const StProductShippingInfoWrapper = styled.div`
  height: 26.2rem;
`;
const StProductShippingInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;

  ${({ theme }) => theme.fonts.zw_Body2};

  & > span {
    color: ${({ theme }) => theme.colors.zw_gray};
  }

  & > p {
    color: ${({ theme }) => theme.colors.zw_black};
  }

  & + & {
    margin-top: 1.8rem;
  }
`;
