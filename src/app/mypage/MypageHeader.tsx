'use client';

import { useRouter } from 'next/navigation';

/* eslint-disable react/jsx-no-useless-fragment */
import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const MypageHeader = () => {
  const router = useRouter();
  useProgress();
  return (
    <>
      <Header
        headerTitle="MY"
        backFunc={() => {
          router.push('/');
        }}
      />
    </>
  );
};

export default MypageHeader;
