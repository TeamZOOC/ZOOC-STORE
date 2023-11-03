import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';

import { Modal, ModalProps, ModalType } from '@/recoil/modal/atom';
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

  const openModal = useCallback(
    (id: ModalType, props: ModalProps = null) => {
      const value = {
        id,
        isOpen: true,
        props,
      };
      setModal(id, value);
    },
    [setModal],
  );

  return { openModal, closeModal };
};

export default useModal;
