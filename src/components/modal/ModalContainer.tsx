'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { modalListState } from '@/recoil/modal/atom';

import ModalBackground from './ModalBackground';

// import QuitModal from './QuitModal';

const MODAL_COMPONENTS: Record<string, () => React.ReactElement> = {
  // quit: QuitModal,
};

const ModalContainer = () => {
  const modalList = useRecoilValue(modalListState);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, []);

  const renderModal = modalList.map((id) => {
    const ModalComponent = MODAL_COMPONENTS[id];
    return (
      <ModalBackground key={id}>
        <ModalComponent key={id} />
      </ModalBackground>
    );
  });

  return (
    portalElement &&
    createPortal(
      <>{renderModal}</>,
      document.getElementById('portal') as HTMLElement,
    )
  );
};

export default ModalContainer;
