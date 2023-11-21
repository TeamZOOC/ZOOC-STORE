import { DefaultValue, selectorFamily } from 'recoil';

import { Toast, ToastKey, toastListState, toastState } from './atom';

export const toastSelector = selectorFamily<Toast, ToastKey>({
  key: 'toastSelector',
  get:
    (toastKey) =>
    ({ get }) =>
      get(toastState(toastKey)),
  set:
    (toastKey) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(toastListState, (prev) =>
          prev.filter((toast) => toast.id !== toastKey),
        );
        reset(toastState(toastKey));
        return;
      }
      set(toastState(toastKey), newValue);

      if (get(toastListState).find((toast) => toast.id === newValue.id)) return;
      set(toastListState, (prev) => [
        ...prev,
        { id: newValue.id, message: newValue.message },
      ]);
    },
});
