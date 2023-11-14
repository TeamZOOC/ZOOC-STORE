'use client';

// import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { BillingInfo } from '@/components/order';
import { ORDER_DETAIL } from '@/mocks/orderDetailData';
import { OrderFormInfo } from '@/types/order';

import useGetOrderForms from '../(hooks)/useGetOrderForms';
import Agreement from './agreement/Agreement';
import CustomerInfo from './customerInfo/CustomerInfo';
import DeliveryInfo from './deliveryInfo/DeliveryInfo';
import PaymentMethod from './paymentMethod/PaymentMethod';
import ProductInfo from './productInfo/ProductInfo';

const Order = () => {
  const { products, payment } = ORDER_DETAIL;
  // const router = useRouter();

  const methods = useForm<OrderFormInfo>({
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
    },
  });

  const { orderer, receiver, address } = useGetOrderForms({
    control: methods.control,
  });

  console.log(orderer, receiver, address);
  return (
    <FormProvider {...methods}>
      <StOrder>
        <ProductInfo products={products} />
        <StHr />
        <CustomerInfo />
        <DeliveryInfo />
        <StHr />
        <PaymentMethod />
        <StHr />
        <StBillingInfoWrapper>
          <BillingInfo payment={payment} />
        </StBillingInfoWrapper>
        <StHr />
        <Agreement />
        <BottomButton
          btnType="button"
          btnName="38,000원 결제하기"
          disabled={false}
          activeFunc={() => {
            methods.handleSubmit((data) => console.log(data))();
            // router.push('/order/payment');
          }}
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
