import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';

import { TOAST_MESSAGES, ToastType } from '@/recoil/toast/atom';
import { toastSelector } from '@/recoil/toast/selector';

const useToast = () => {
  const setToast = useRecoilCallback(
    ({ set }) =>
      (id: ToastType) => {
        const message = TOAST_MESSAGES[id];
        const value = {
          id,
          message,
        };
        set(toastSelector(id), value);
      },
    [],
  );

  const hideToast = useRecoilCallback(
    ({ reset }) =>
      (id: ToastType) => {
        reset(toastSelector(id));
      },
    [],
  );

  const showToast = useCallback(
    (id: ToastType) => {
      setToast(id);
    },
    [setToast],
  );

  return { showToast, hideToast };
};

export default useToast;
