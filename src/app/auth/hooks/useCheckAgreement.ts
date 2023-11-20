import { AGREEMENT } from '@/constants/agreement';
import { useState } from 'react';

const useCheckAgreement = () => {
  const [agreement, setAgreement] = useState(
    Array(AGREEMENT.length).fill(false),
  );

  const isAllAgreement = agreement.every((check) => check === true);

  const handleCheckAgreement = (index: number) => {
    const newAgreement = [...agreement];
    newAgreement[index - 1] = !newAgreement[index - 1];
    setAgreement(newAgreement);
  };

  const handleCheckAllAgreement = () => {
    const newAgreement = [...agreement];
    setAgreement(newAgreement.map(() => !isAllAgreement));
  };

  return {
    agreement,
    isAllAgreement,
    handleCheckAgreement,
    handleCheckAllAgreement,
  };
};

export default useCheckAgreement;
