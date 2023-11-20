export interface PetDataInfo {
  id?: number;
  name: string;
  breed: string;
  photo?: string;
}

export interface PetEditInfo {
  nickName?: string;
  file?: File;
  breed?: string;
}
