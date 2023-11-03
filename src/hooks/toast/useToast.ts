import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';

import { Toast, ToastType } from '@/recoil/toast/atom';
import { toastSelector } from '@/recoil/toast/selector';

const useToast = () => {
  const setToast = useRecoilCallback(
    ({ set }) =>
      (id: ToastType, value: Toast) => {
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
    (id: ToastType, message: string) => {
      const value = {
        id,
        message,
      };
      setToast(id, value);
      setTimeout(() => hideToast(id), 1500);
    },
    [hideToast, setToast],
  );

  return { showToast };
};

export default useToast;
