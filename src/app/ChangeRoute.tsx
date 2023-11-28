/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import 'nprogress/nprogress.css';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { returnPathState } from '@/recoil/order/atom';
import { userState } from '@/recoil/user/atom';

const ChangeRoute = () => {
  const [returnPath, setReturnPath] = useRecoilState(returnPathState);
  const userStatus = useRecoilValue(userState);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!returnPath) return;

    if (userStatus === 'NO_PET') {
      router.push('pet/registration');
    } else if (userStatus === 'PET_EXISTS' || userStatus === 'DATASET_EXISTS') {
      router.push('pet/registration');
    } else if (userStatus === 'IMAGE_EXISTS') {
      router.push(returnPath);
      setReturnPath(undefined);
    }
  }, []);

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return <></>;
};

export default ChangeRoute;
