import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { getPet, getPetDataset } from '@/apis/pet';
import { userState } from '@/recoil/user/atom';

export const useUserState = () => {
  const [userStatus, setUserStatus] = useRecoilState(userState);

  const checkPet = async () => {
    const petRes = await getPet();
    if (petRes) {
      return checkPetDataset(petRes.id);
    }
    return 'NO_PET';
  };

  const checkPetDataset = async (petId: number) => {
    const datasetRes = await getPetDataset(petId);
    if (datasetRes) {
      return datasetRes.dataset_images.length > 0
        ? 'IMAGE-EXISTS'
        : 'DATASET-EXISTS';
    }
    return 'PET-EXISTS';
  };

  const checkUserStatus = async () => {
    if (userStatus === 'GUEST') return;

    const status = await checkPet();
    setUserStatus(status);
  };

  useEffect(() => {
    checkUserStatus();
    console.log(userStatus);
  }, [userStatus]);

  return { checkUserStatus, userState };
};
