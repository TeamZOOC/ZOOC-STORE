import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useToast } from '@/hooks/toast';
import { userState } from '@/recoil/user/atom';

import useCreateDataset from './useCreateDataset';
import useUploadDatasetImages from './useUploadDatasetImages';

interface useDatasetUploadProps {
  petId: number;
  files: File[];
}

const useDatasetUpload = ({ petId, files }: useDatasetUploadProps) => {
  const { createDataset, datasetId } = useCreateDataset();
  const { uploadDatasetImages, isLoading } = useUploadDatasetImages();
  const { showToast } = useToast();
  const router = useRouter();
  const [isMount, setIsMount] = useState(false);
  const [, setUserStatus] = useRecoilState(userState);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      (async () => {
        await createDataset(petId);
        if (datasetId) {
          setUserStatus('DATASET_EXISTS');
        }
      })();
    }
  }, [isMount, datasetId]);

  const handleDatasetUpload = async () => {
    try {
      await uploadDatasetImages({ datasetId, files });
      // TODO: 라우팅 분기처리
      router.push('/mypage');
    } catch (error) {
      showToast('dataset_upload_error');
      console.error('이미지 업로드 실패', error);
    }
  };

  return { handleDatasetUpload, isLoading };
};

export default useDatasetUpload;
