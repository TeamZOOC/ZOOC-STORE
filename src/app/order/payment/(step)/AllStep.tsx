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
