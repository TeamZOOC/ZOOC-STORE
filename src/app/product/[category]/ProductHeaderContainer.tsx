'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const ProductHeaderContainer = () => {
  const router = useRouter();

  return <Header sideMenu backFunc={() => router.push('/')} />;
};

export default ProductHeaderContainer;
