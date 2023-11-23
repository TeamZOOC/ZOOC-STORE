import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { getPet, getPetDataset } from '@/apis/pet';
import { userState } from '@/recoil/user/atom';

export const useUserState = () => {
  const [userStatus, setUserStatus] = useRecoilState(userState);

  const checkUser = async () => {
    if (userStatus === 'NON-MEMBER') {
      return;
    }

    try {
      const petRes = await getPet();
      if (petRes) {
        console.log('PetId', petRes.id);
        try {
          const datasetRes = await getPetDataset(petRes.id);
          if (datasetRes) {
            console.log('Dataset', datasetRes);
            setUserStatus(
              datasetRes.dataset_images.length > 0
                ? 'IMAGE-EXISTS'
                : 'DATASET-EXISTS',
            );
          } else {
            setUserStatus('PET-EXISTS');
          }
        } catch (datasetError) {
          setUserStatus('PET-EXISTS');
        }
      } else {
        setUserStatus('MEMBER');
      }
    } catch (petError) {
      setUserStatus('MEMBER');
    }
  };

  useEffect(() => {
    checkUser();
  }, [userStatus]);

  return { checkUser, userState };
};
