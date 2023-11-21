import { DefaultValue, selectorFamily } from 'recoil';

import { Modal, ModalKey, modalListState, modalState } from './atom';

export const modalSelector = selectorFamily<Modal, ModalKey>({
  key: 'modalSelector',
  get:
    (modalKey) =>
    ({ get }) =>
      get(modalState(modalKey)),
  set:
    (modalKey) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(modalListState, (prev) =>
          prev.filter((modal) => modal.id !== modalKey),
        );
        reset(modalState(modalKey));
        return;
      }
      set(modalState(modalKey), newValue);

      if (get(modalListState).find((modal) => modal.id === newValue.id)) return;
      set(modalListState, (prev) => [
        ...prev,
        { id: newValue.id, isOpen: newValue.isOpen, props: newValue.props },
      ]);
    },
});
