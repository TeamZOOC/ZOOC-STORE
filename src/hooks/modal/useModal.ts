import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';

import { Modal, ModalKey, ModalProps } from '@/recoil/modal/atom';
import { modalSelector } from '@/recoil/modal/selector';

const useModal = () => {
  const setModal = useRecoilCallback(
    ({ set }) =>
      (id: ModalKey, value: Modal) => {
        set(modalSelector(id), value);
      },
    [],
  );

  const closeModal = useRecoilCallback(
    ({ reset }) =>
      (id: ModalKey) => {
        reset(modalSelector(id));
      },
    [],
  );

  const openModal = useCallback(
    (id: ModalKey, props: ModalProps = null) => {
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
