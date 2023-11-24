import { selector } from 'recoil';

import { selectedOptionsState } from './atom';

export const selectedOptionsSelector = selector({
  key: 'selectedOptionsSelector',
  get: ({ get }) => {
    const selectedOptions = get(selectedOptionsState);
    return selectedOptions.reduce((total, optionGroup) => {
      // 옵션 그룹이 비어있지 않은 경우, 첫 번째 요소의 quantity를 더함
      if (optionGroup.length > 0) {
        return total + optionGroup[0].pieces;
      }
      // 옵션 그룹이 비어있으면, 현재까지의 합계를 반환
      return total;
    }, 0);
  },
});
