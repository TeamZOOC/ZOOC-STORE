import { atom, atomFamily } from 'recoil';

const TOAST_KEY = [
  'delivery',
  'agreement',
  'pet_required',
  'order_required',
  'accountnumber_copied',
  'no_pet',
  'dataset_upload_error',
  'order_error',
  'token_error',
  'pet_register_error',
  'option_duplicated',
] as const;

export type ToastKey = (typeof TOAST_KEY)[number];

export const TOAST_MESSAGES: Record<ToastKey, string> = {
  delivery: '배송 정보를 모두 입력해주세요',
  agreement: '필수 동의 항목을 확인해주세요',
  pet_required: '필수 정보를 입력해주세요',
  order_required: '필수 작성 항목을 확인해주세요',
  accountnumber_copied: '계좌번호가 복사되었어요.',
  no_pet: '먼저 반려동물을 등록해주세요.',
  dataset_upload_error: '이미지 업로드에 실패했어요. 다시 시도해주세요.',
  order_error: '주문에 실패했어요. 다시 시도해주세요.',
  pet_register_error: '반려동물 등록에 실패했어요. 다시 시도해주세요.',
  option_duplicated: '이미 추가된 옵션이에요',
  token_error: '사용자 정보가 만료되었어요. 다시 로그인해주세요.',
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
