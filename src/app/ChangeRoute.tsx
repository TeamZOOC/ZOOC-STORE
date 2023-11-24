/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import 'nprogress/nprogress.css';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { returnPathState } from '@/recoil/order/atom';

const ChangeRoute = () => {
  const [returnPath, setReturnPath] = useRecoilState(returnPathState);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!returnPath) return;
    router.push(returnPath);
    setReturnPath(undefined);
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
