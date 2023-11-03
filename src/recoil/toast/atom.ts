import { atom, atomFamily } from 'recoil';

const TOAST_TYPE = ['delivery', 'agreement'] as const;

export type ToastType = (typeof TOAST_TYPE)[number];
export type Toast = {
  id: ToastType;
  message: string;
};

export const toastState = atomFamily<Toast, ToastType>({
  key: 'toastState',
  default: (id) => ({
    id,
    message: '',
  }),
});

export const toastListState = atom<Toast[]>({
  key: 'toastListState',
  default: [],
});
