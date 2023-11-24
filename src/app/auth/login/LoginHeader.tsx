'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const LoginHeader = () => {
  const router = useRouter();
  useProgress();
  return (
    <Header
      backFunc={() => {
        router.back();
      }}
    />
  );
};

export default LoginHeader;
