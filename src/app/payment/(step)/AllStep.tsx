'use client';

import { useState } from 'react';
import { styled } from 'styled-components';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const AllStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StAllStep>
      {currentStep === 1 && (
        <FirstStep handleNextStep={() => setCurrentStep(2)} />
      )}
      {currentStep === 2 && (
        <SecondStep handleNextStep={() => setCurrentStep(3)} />
      )}
      {currentStep === 3 && (
        <ThirdStep handleNextStep={() => setCurrentStep(3)} />
      )}
    </StAllStep>
  );
};

export default AllStep;

const StAllStep = styled.div``;
