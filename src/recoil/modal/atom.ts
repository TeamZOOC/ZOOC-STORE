import { atom, atomFamily } from 'recoil';

export type ModalType = string;
export type ModalParams = Record<string, unknown> | null;
export type Modal = {
  id: ModalType;
  isOpen: boolean;
  params: ModalParams;
};

export const modalState = atomFamily<Modal, ModalType>({
  key: 'modalState',
  default: (id) => ({
    id,
    isOpen: false,
    params: null,
  }),
});

export const modalListState = atom<ModalType[]>({
  key: 'modalListState',
  default: [],
});
