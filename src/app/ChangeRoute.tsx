/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import 'nprogress/nprogress.css';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { returnPathState } from '@/recoil/order/atom';
import { userState } from '@/recoil/user/atom';

import useChannelTalk from './useChannelTalk';

const ChangeRoute = () => {
  const [returnPath, setReturnPath] = useRecoilState(returnPathState);
  const userStatus = useRecoilValue(userState);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useChannelTalk();

  useEffect(() => {
    if (!returnPath) return;

    if (userStatus === 'NO_PET') {
      router.push('pet/registration');
    } else if (userStatus === 'PET_EXISTS' || userStatus === 'DATASET_EXISTS') {
      router.push('pet/registration');
    } else if (userStatus === 'IMAGE_EXISTS') {
      router.push(returnPath);
      setReturnPath(undefined);
    }
  }, []);

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return (
    <>
      {/* <Script
        id="channeltalk"
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
        dangerouslySetInnerHTML={{
          __html: `     
   (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "282c6661-b5a5-480f-845a-abc77adaf3d4", //please fill with your plugin key
    "memberId": "guswl733598", //fill with user id
  });
  `,
        }}
      /> */}
    </>
  );
};

export default ChangeRoute;
