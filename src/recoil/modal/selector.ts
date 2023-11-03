import { DefaultValue, selectorFamily } from 'recoil';

import { Modal, modalListState, modalState, ModalType } from './atom';

export const modalSelector = selectorFamily<Modal, ModalType>({
  key: 'modalSelector',
  get:
    (modalType) =>
    ({ get }) =>
      get(modalState(modalType)),
  set:
    (modalType) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(modalListState, (prev) =>
          prev.filter((modal) => modal.id !== modalType),
        );
        reset(modalState(modalType));
        return;
      }
      set(modalState(modalType), newValue);

      if (get(modalListState).find((modal) => modal.id === newValue.id)) return;
      set(modalListState, (prev) => [
        ...prev,
        { id: newValue.id, isOpen: newValue.isOpen, props: newValue.props },
      ]);
    },
});
