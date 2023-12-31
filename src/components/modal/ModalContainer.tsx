/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { ModalKey, modalListState } from '@/recoil/modal/atom';

import CartDeleteModal from './CartDeleteModal';
import ImageValidateModal from './ImageValidateModal';
import ModalBackground from './ModalBackground';
import OrderQuitModal from './OrderQuitModal';
import PaymentQuitModal from './PaymentQuitModal';
import PetRegisterQuitModal from './PetRegisterQuitModal';
import PostcodeModal from './PostcodeModal';
import WithDrawModal from './WithDrawModal';
import SignUpModal from './SignUpModal';

const MODAL_COMPONENTS: Record<ModalKey, (props: any) => React.ReactElement> = {
  imageValidate: (props) => <ImageValidateModal {...props} />,
  postcode: () => <PostcodeModal />,
  orderQuit: (props) => <OrderQuitModal {...props} />,
  petRegisterQuit: (props) => <PetRegisterQuitModal {...props} />,
  cartDelete: (props) => <CartDeleteModal {...props} />,
  paymentQuit: () => <PaymentQuitModal />,
  withdraw: () => <WithDrawModal />,
  signUp: () => <SignUpModal />,
};

const ModalContainer = () => {
  const modalList = useRecoilValue(modalListState);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, []);

  const renderModal = modalList.map(({ id, props }) => {
    const ModalComponent = MODAL_COMPONENTS[id];
    return (
      <ModalBackground key={id}>
        <ModalComponent {...props} />
      </ModalBackground>
    );
  });

  return portalElement && createPortal(<>{renderModal}</>, portalElement);
};

export default ModalContainer;
