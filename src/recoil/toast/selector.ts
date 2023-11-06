import { DefaultValue, selectorFamily } from 'recoil';

import { Toast, toastListState, toastState, ToastType } from './atom';

export const toastSelector = selectorFamily<Toast, ToastType>({
  key: 'toastSelector',
  get:
    (toastType) =>
    ({ get }) =>
      get(toastState(toastType)),
  set:
    (toastType) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(toastListState, (prev) =>
          prev.filter((toast) => toast.id !== toastType),
        );
        reset(toastState(toastType));
        return;
      }
      set(toastState(toastType), newValue);

      if (get(toastListState).find((toast) => toast.id === newValue.id)) return;
      set(toastListState, (prev) => [
        ...prev,
        { id: newValue.id, message: newValue.message },
      ]);
    },
});
