/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { ModalKey, modalListState } from '@/recoil/modal/atom';

import ImageValidateModal from './ImageValidateModal';
import ModalBackground from './ModalBackground';
import PaymentQuitModal from './PaymentQuitModal';
import PetRegisterQuitModal from './PetRegisterQuitModal';
import PostcodeModal from './PostcodeModal';
import QuitModal from './QuitModal';

const MODAL_COMPONENTS: Record<ModalKey, (props: any) => React.ReactElement> = {
  quit: () => <QuitModal />,
  imageValidate: (props) => <ImageValidateModal {...props} />,
  postcode: () => <PostcodeModal />,
  petRegisterQuit: () => <PetRegisterQuitModal />,
  paymentQuit: () => <PaymentQuitModal />,
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
