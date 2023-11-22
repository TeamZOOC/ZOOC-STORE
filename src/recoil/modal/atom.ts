import { atom, atomFamily } from 'recoil';

const MODAL_KEY = [
  'quit',
  'imageValidate',
  'postcode',
  'petRegisterQuit',
  'paymentQuit',
] as const;

export type ModalKey = (typeof MODAL_KEY)[number];
export type ModalProps = Record<string, unknown> | null;
export type Modal = {
  id: ModalKey;
  isOpen: boolean;
  props?: ModalProps;
};

export const modalState = atomFamily<Modal, ModalKey>({
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
