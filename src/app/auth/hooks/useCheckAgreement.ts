import { AGREEMENT } from '@/constants/agreement';
import { useState } from 'react';

const useCheckAgreement = () => {
  const [agreement, setAgreement] = useState(
    Array(AGREEMENT.length).fill(false),
  );

  const isAllAgreement = agreement.every((check) => check === true);

  const handleCheckAgreement = (index: number) => {
    setAgreement(agreement.map((item, i) => (i === index - 1 ? !item : item)));
  };

  const handleCheckAllAgreement = () => {
    setAgreement(agreement.map(() => !isAllAgreement));
  };

  return {
    agreement,
    isAllAgreement,
    handleCheckAgreement,
    handleCheckAllAgreement,
  };
};

export default useCheckAgreement;
