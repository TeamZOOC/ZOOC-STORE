import { Control, useController } from 'react-hook-form';

import { OrderFormInfo } from '@/types/order';

export default function useGetOrderForms({
  control,
}: {
  control: Control<OrderFormInfo>;
}) {
  const orderer = useController({
    name: 'orderer',
    control,
  }).field;

  const receiver = useController({
    name: 'receiver',
    control,
  }).field;

  const address = useController({
    name: 'address',
    control,
  }).field;

  const agreement = useController({
    name: 'agreement',
    control,
  }).field;

  return { orderer, receiver, address, agreement };
}
