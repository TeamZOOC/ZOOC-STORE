import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { UserState } from '@/types/auth';

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: 'userState',
  default: 'NON-MEMBER',
  effects_UNSTABLE: [persistAtom],
});

// export const userState = atom({
//   key: 'userState',
//   default: {
//     isMember: false,
//     petExists: false,
//     datasetExists: false,
//     imageExists: false,
//   },
// });

export const userProcessCompletedState = atom({
  key: 'userProcessCompletedState',
  default: false,
});
