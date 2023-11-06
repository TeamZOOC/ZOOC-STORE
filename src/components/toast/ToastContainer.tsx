'use client';

/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { Toast, toastListState } from '@/recoil/toast/atom';

import ToastComponent from './ToastComponent';

const ToastContainer = () => {
  const toastList = useRecoilValue(toastListState);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, []);

  const renderToast = toastList.map(({ id, message }: Toast) => (
    <ToastComponent key={id} id={id} message={message} />
  ));

  return portalElement && createPortal(<>{renderToast}</>, portalElement);
};

export default ToastContainer;
