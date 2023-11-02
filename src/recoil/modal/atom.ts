import { atom, atomFamily } from 'recoil';

const MODAL_TYPE = ['quit', 'imageValidate'] as const;

export type ModalType = (typeof MODAL_TYPE)[number];
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
