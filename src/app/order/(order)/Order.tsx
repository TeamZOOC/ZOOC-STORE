'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { BillingInfo } from '@/components/order';
import { useToast } from '@/hooks/toast';
import { cartState } from '@/recoil/cart/atom';
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
  const purchasePrice = useRecoilValue(purchasePriceState);
  const resetPurchase = useResetRecoilState(purchaseState);
  const resetPurchasePrice = useResetRecoilState(purchasePriceState);
  const resetCart = useResetRecoilState(cartState);
  const { orderPost } = usePostOrder();

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
    const option = purchases.optionList[0];
    return {
      id: String(purchases.id),
      name: purchases.name,
      image: purchases.image,
      optionDetails: [option.name],
      pieces: option.pieces,
      price: purchases.price,
    };
  };

  const transformedProducts = purchase.map(transformProduct);

  const totalPrice = formatPrice(
    purchasePrice.totalProductPrice + purchasePrice.deliveryFee,
  );

  const purchaseData = (purchases: CartInfo[]) =>
    purchases.map((product) => ({
      productId: product.id,
      optionIds: product.optionList.map((option) => option.id),
      pieces: product.optionList[0].pieces,
    }));

  const onSubmit = async (formdata: OrderFormData) => {
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
      await orderPost(postData);
      router.push(`/order/payment?totalPrice=${totalPrice}`);
      resetPurchase();
      resetPurchasePrice();
      resetCart();
    } catch (error) {
      showToast('order_error');
      console.error('주문 실패', error);
    }
  };

  const onError = () => {
    showToast('order_required');
  };

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
        <BottomButton
          btnType="button"
          btnName={`${totalPrice}원 결제하기`}
          disabled={!isValid}
          activeFunc={handleSubmit(onSubmit, onError)}
        />
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
