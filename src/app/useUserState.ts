import { getCookie } from 'cookies-next';
import { useRecoilState } from 'recoil';

import { getPet, getPetDataset } from '@/apis/pet';
import { petIdState } from '@/recoil/pet/atom';
import { userState } from '@/recoil/user/atom';

export const useUserState = () => {
  const [, setUserStatus] = useRecoilState(userState);
  const [petId, setPetId] = useRecoilState(petIdState);

  const checkPet = async () => {
    if (petId) {
      return checkPetDataset(petId);
    }
    try {
      const petRes = await getPet();
      if (petRes) {
        setPetId(petRes.id);
        return checkPetDataset(petRes.id);
      }
    } catch (e) {
      return 'NO_PET';
    }
    return 'NO_PET';
  };

  const checkPetDataset = async (petid: number) => {
    try {
      const datasetRes = await getPetDataset(petid);
      if (datasetRes) {
        return datasetRes.dataset_images.length > 0
          ? 'IMAGE_EXISTS'
          : 'DATASET_EXISTS';
      }
    } catch (e) {
      return 'PET_EXISTS';
    }
    return 'PET_EXISTS';
  };

  const checkUserStatus = async () => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) return;

    const status = await checkPet();
    setUserStatus(status);
  };

  return { checkUserStatus };
};
