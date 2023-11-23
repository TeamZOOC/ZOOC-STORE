import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { UserState } from '@/types/auth';

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: 'userState',
  default: 'GUEST',
  effects_UNSTABLE: [persistAtom],
});
