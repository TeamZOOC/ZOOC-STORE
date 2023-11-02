import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';

import { Modal, ModalParams, ModalType } from '@/recoil/modal/atom';
import { modalSelector } from '@/recoil/modal/selector';

const useModal = () => {
  const setModal = useRecoilCallback(
    ({ set }) =>
      (id: ModalType, value: Modal) => {
        set(modalSelector(id), value);
      },
    [],
  );

  const closeModal = useRecoilCallback(
    ({ reset }) =>
      (id: ModalType) => {
        reset(modalSelector(id));
      },
    [],
  );

  const handleOpenModal = useCallback(
    (id: ModalType, params: ModalParams = null) => {
      const value = {
        id,
        isOpen: true,
        params,
      };
      setModal(id, value);
    },
    [setModal],
  );

  return { openModal: handleOpenModal, closeModal };
};

export default useModal;
