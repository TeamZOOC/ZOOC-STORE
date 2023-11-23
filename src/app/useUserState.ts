import { useRecoilState } from 'recoil';

import { userState } from '@/recoil/user/atom';

export const useUserState = () => {
  const [userStatus, setUserStatus] = useRecoilState(userState);

  console.log(userStatus);

  return { userState };
};
