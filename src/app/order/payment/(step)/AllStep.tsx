'use client';

import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { cartState } from '@/recoil/cart/atom';
import { prevPathState } from '@/recoil/order/atom';
import { purchasePriceState, purchaseState } from '@/recoil/purchase/atom';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const AllStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [prevPathStatus, setPrevPathStatus] = useRecoilState(prevPathState);
  const resetPurchase = useResetRecoilState(purchaseState);
  const resetPurchasePrice = useResetRecoilState(purchasePriceState);
  const resetCart = useResetRecoilState(cartState);

  const resetCartData = () => {
    resetPurchase();
    resetPurchasePrice();

    if (prevPathStatus === 'cart') {
      resetCart();
      setPrevPathStatus(undefined);
    }
  };

  useEffect(() => {
    resetCartData();
  }, []);

  return (
    <StAllStep>
      <FirstStep currentStep={currentStep} handleNextStep={setCurrentStep} />
      <SecondStep currentStep={currentStep} handleNextStep={setCurrentStep} />
      <ThirdStep currentStep={currentStep} />
    </StAllStep>
  );
};

export default AllStep;

const StAllStep = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
