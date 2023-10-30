import { useState } from 'react';

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      hideToast();
    }, 3000);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  return { toastMessage, showToast, hideToast };
};
