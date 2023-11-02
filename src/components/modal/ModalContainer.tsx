/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { modalListState } from '@/recoil/modal/atom';
import { modalSelector } from '@/recoil/modal/selector';

import ImageValidateModal from './ImageValidateModal';
import ModalBackground from './ModalBackground';
import QuitModal from './QuitModal';

const MODAL_COMPONENTS: Record<string, (props: any) => React.ReactElement> = {
  quit: () => <QuitModal />,
  imageValidate: (props) => <ImageValidateModal {...props} />,
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
        <ModalComponent key={id} {...props} />
      </ModalBackground>
    );
  });

  return portalElement && createPortal(<>{renderModal}</>, portalElement);
};

export default ModalContainer;
