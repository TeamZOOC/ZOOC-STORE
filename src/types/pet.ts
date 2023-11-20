export interface PetDataInfo {
  id?: number;
  name: string;
  breed: string;
  photo?: string;
}

export interface EditPetFormData {
  nickName: string;
  breed: string;
}

export interface PetEditInfo {
  nickName?: string;
  file?: File;
  breed?: string;
}
