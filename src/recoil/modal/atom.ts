import { atom, atomFamily } from 'recoil';

export type ModalType = string;
export type ModalProps = Record<string, unknown> | null;
export type Modal = {
  id: ModalType;
  isOpen: boolean;
  props?: ModalProps;
};

export const modalState = atomFamily<Modal, ModalType>({
  key: 'modalState',
  default: (id) => ({
    id,
    isOpen: false,
    props: null,
  }),
});

export const modalListState = atom<Modal[]>({
  key: 'modalListState',
  default: [],
});
