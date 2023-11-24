'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const ProductDetailHeaderContainer = () => {
  const router = useRouter();
  return <Header sideMenu backFunc={() => router.back()} />;
};

export default ProductDetailHeaderContainer;
