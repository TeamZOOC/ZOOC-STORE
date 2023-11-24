import { AGREEMENT } from '@/constants/agreement';
import { useState } from 'react';

const useCheckAgreement = () => {
  const [agreement, setAgreement] = useState(
    Array(AGREEMENT.length).fill(false),
  );

  const isAgreement =
    agreement[0] === true && agreement[1] === true && agreement[2] === true;

  const isAllAgreement = agreement.every((item) => item === true);

  const handleCheckAgreement = (index: number) => {
    setAgreement(agreement.map((item, i) => (i === index - 1 ? !item : item)));
  };

  const handleCheckAllAgreement = () => {
    setAgreement(agreement.map(() => !isAllAgreement));
  };

  return {
    agreement,
    isAgreement,
    isAllAgreement,
    handleCheckAgreement,
    handleCheckAllAgreement,
  };
};

export default useCheckAgreement;
