'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { LoadingSpinner } from '@/components/loading';
import { BillingInfo } from '@/components/order';
import { useToast } from '@/hooks/toast';
import { petIdState } from '@/recoil/pet/atom';
import { purchasePriceState, purchaseState } from '@/recoil/purchase/atom';
import { CartInfo } from '@/types/cart';
import { OrderFormData } from '@/types/form';
import { OrderPostInfo } from '@/types/order';
import { formatPrice } from '@/utils/formatPrice';

import usePostOrder from '../hooks/usePostOrder';
import Agreement from './agreement/Agreement';
import CustomerInfo from './customerInfo/CustomerInfo';
import DeliveryInfo from './deliveryInfo/DeliveryInfo';
import PaymentMethod from './paymentMethod/PaymentMethod';
import ProductsInfo from './productsInfo/ProductsInfo';

const Order = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const petId = useRecoilValue(petIdState);
  const purchase = useRecoilValue(purchaseState);
  const [purchasePrice, setPurchasePrice] = useRecoilState(purchasePriceState);
  const { orderPost, errorStatus } = usePostOrder();
  const [isOrderLoading, setIsOrderLoading] = useState(false);

  const methods = useForm<OrderFormData>({
    defaultValues: {
      orderer: {
        name: '',
        phone: '',
      },
      receiver: {
        name: '',
        phone: '',
      },
      address: {
        address: '',
        postcode: '',
        detailAddress: '',
        request: '',
      },
      agreement: {
        checkOrder: false,
        privacyPolicy: false,
        thirdParty: false,
      },
    },
    mode: 'onSubmit',
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const transformProduct = (purchases: CartInfo) => {
    const firstOption = purchases.optionList[0];
    const optionDetails = purchases.optionList.map((option) => option.name);

    return {
      id: String(purchases.id),
      name: purchases.name,
      image: purchases.image,
      optionDetails,
      pieces: firstOption.pieces,
      price: purchases.price,
      sale: purchases.sale!,
    };
  };

  const transformedProducts = purchase.map(transformProduct);

  const totalSaleQuantity = purchase.reduce((total, item) => {
    const firstOptionQuantity = item.optionList[0]
      ? item.optionList[0].pieces
      : 0;
    const itemTotal = item.price * firstOptionQuantity;
    return total + itemTotal;
  }, 0);

  const totalPrice = formatPrice(totalSaleQuantity + 0);

  const purchaseData = (purchases: CartInfo[]) =>
    purchases.map((product) => ({
      productId: product.id,
      optionIds: product.optionList.map((option) => option.id),
      pieces: product.optionList[0].pieces,
    }));

  const onSubmit = async (formdata: OrderFormData) => {
    if (isOrderLoading) return;
    if (!petId) {
      showToast('no_pet');
      return;
    }
    const { agreement, ...formDataWithoutAgreement } = formdata;
    const postData: OrderPostInfo = {
      ...formDataWithoutAgreement,
      petId,
      products: purchaseData(purchase),
    };
    try {
      setIsOrderLoading(true);
      await orderPost(postData);
      router.push(`/order/payment?totalPrice=${totalPrice}`);
    } catch (error) {
      setIsOrderLoading(false);
      showToast('order_error');
      console.error('주문 실패', error);
    }
  };

  const onError = () => {
    showToast('order_required');
  };

  if (errorStatus === 401) {
    showToast('token_error');
    signOut({ callbackUrl: '/auth/login' });
  }

  useEffect(() => {
    setPurchasePrice({ totalProductPrice: totalSaleQuantity, deliveryFee: 0 });
  }, [totalSaleQuantity]);

  if (isOrderLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <StOrder>
        <ProductsInfo products={transformedProducts} />
        <StHr />
        <CustomerInfo />
        <DeliveryInfo />
        <StHr />
        <PaymentMethod />
        <StHr />
        <StBillingInfoWrapper>
          <BillingInfo payment={purchasePrice} />
        </StBillingInfoWrapper>
        <StHr />
        <Agreement />
        <StBottomButton>
          <BottomButton
            btnType="button"
            btnName={`${totalPrice}원 결제하기`}
            disabled={!isValid}
            activeFunc={handleSubmit(onSubmit, onError)}
          />
        </StBottomButton>
      </StOrder>
    </FormProvider>
  );
};

export default Order;

const StOrder = styled.div`
  margin-bottom: 7.7rem;
`;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 0 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StBillingInfoWrapper = styled.div`
  padding: 4rem 2.8rem;
`;

const StBottomButton = styled.div`
  position: sticky;
  bottom: 0;
`;
