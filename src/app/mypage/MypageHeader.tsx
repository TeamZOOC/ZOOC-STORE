'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const MypageHeader = () => {
  const router = useRouter();
  return (
    <>
      <Header
        headerTitle="MY"
        backFunc={() => {
          router.back();
        }}
      />
    </>
  );
};

export default MypageHeader;
