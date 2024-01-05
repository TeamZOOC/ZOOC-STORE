/* eslint-disable no-unused-vars */

import { useCallback } from 'react';

interface TokenInfo {
  token: string;
}

declare global {
  interface Window {
    Native: {
      getToken: () => string;
      onClickBack: () => void;
    };
    webkit: {
      messageHandlers: {
        callBackHandler: any;
        postMessage: any;
      };
    };
    TokenInfo: {
      token: string;
    };
    responseToken: (tokenValue: TokenInfo) => string;
  }
}

const usePlatformServices = (isiOS: boolean, isAndroid: boolean) => {
  const getToken = useCallback(() => {
    try {
      if (isiOS) {
        window.responseToken = function (tokenValue: TokenInfo) {
          const parsedObject: TokenInfo = JSON.parse(
            tokenValue as unknown as string,
          );
          localStorage.setItem('iOSToken', parsedObject.token);
          return parsedObject.token;
        };
      }
      if (isAndroid && window.Native?.getToken) {
        return window.Native.getToken();
      }
    } catch (error) {
      console.error(error);
    }
    return '';
  }, [isiOS, isAndroid]);

  const goBack = useCallback(() => {
    try {
      if (isiOS && window.webkit?.messageHandlers) {
        window.webkit.messageHandlers.callBackHandler.postMessage('back');
      }
      if (isAndroid && window.Native?.onClickBack) {
        window.Native.onClickBack();
      }
    } catch (error) {
      console.error(error);
    }
  }, [isiOS, isAndroid]);

  return { getToken, goBack };
};

export default usePlatformServices;
