/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { returnPathState } from '@/recoil/order/atom';

const ChangeRoute = () => {
  const [returnPath, setReturnPath] = useRecoilState(returnPathState);
  const router = useRouter();

  useEffect(() => {
    if (!returnPath) return;
    router.push(returnPath);
    setReturnPath(undefined);
  }, []);

  return <></>;
};

export default ChangeRoute;
