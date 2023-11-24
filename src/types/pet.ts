export interface PetDataInfo {
  id?: number;
  name: string;
  breed: string;
  photo?: string;
}

export interface DataSetImagesInfo {
  url: string;
  id: string;
  createdAt: string;
}

export interface PetDataSetInfo {
  datasetId: string;
  datasetName: string;
  createdAt: string;
  description?: string;
  updatedAt: string;
  dataset_images: DataSetImagesInfo[];
}

export interface PetEditInfo {
  nickName?: string;
  file?: File;
  breed?: string;
}

export interface DatasetInfo {
  datasetId: string;
}
