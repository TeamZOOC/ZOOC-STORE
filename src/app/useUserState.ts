import { getCookie } from 'cookies-next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { getPet, getPetDataset } from '@/apis/pet';
import { userState } from '@/recoil/user/atom';

export const useUserState = () => {
  const [userStatus, setUserStatus] = useRecoilState(userState);

  const checkPet = async () => {
    try {
      const petRes = await getPet();
      if (petRes) {
        return checkPetDataset(petRes.id);
      }
    } catch (e) {
      return 'NO_PET';
    }
    return 'NO_PET';
  };

  const checkPetDataset = async (petId: number) => {
    try {
      const datasetRes = await getPetDataset(petId);
      if (datasetRes) {
        return datasetRes.dataset_images.length > 0
          ? 'IMAGE-EXISTS'
          : 'DATASET-EXISTS';
      }
    } catch (e) {
      return 'PET-EXISTS';
    }
    return 'PET-EXISTS';
  };

  const checkUserStatus = async () => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) return;

    const status = await checkPet();
    setUserStatus(status);
  };

  useEffect(() => {
    // checkUserStatus();
    console.log(userStatus);
  }, [userStatus]);

  return { checkUserStatus, userState };
};
