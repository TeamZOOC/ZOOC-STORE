import { atom, atomFamily } from 'recoil';

const TOAST_TYPE = ['delivery', 'agreement'] as const;

export type ToastType = (typeof TOAST_TYPE)[number];

export const TOAST_MESSAGES: Record<ToastType, string> = {
  delivery: '배송 정보를 모두 입력해주세요',
  agreement: '필수 동의 항목을 확인해주세요',
};

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
