import { atom, atomFamily } from 'recoil';

const TOAST_KEY = [
  'delivery',
  'agreement',
  'pet_required',
  'order_required',
  'dataset_upload_error',
] as const;

export type ToastKey = (typeof TOAST_KEY)[number];

export const TOAST_MESSAGES: Record<ToastKey, string> = {
  delivery: '배송 정보를 모두 입력해주세요',
  agreement: '필수 동의 항목을 확인해주세요',
  pet_required: '필수 정보를 입력해주세요',
  order_required: '필수 작성 항목을 확인해주세요',
  dataset_upload_error: '이미지 업로드에 실패했어요. 다시 시도해주세요.',
};

export type Toast = {
  id: ToastKey;
  message: string;
};

export const toastState = atomFamily<Toast, ToastKey>({
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
