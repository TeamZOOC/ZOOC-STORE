'use client';

import { useRouter } from 'next/navigation';

/* eslint-disable react/jsx-no-useless-fragment */
import { Header } from '@/components/header';

const MypageHeader = () => {
  const router = useRouter();
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
