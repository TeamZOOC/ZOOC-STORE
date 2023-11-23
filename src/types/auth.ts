export type UserState =
  | 'GUEST'
  | 'NO_PET'
  | 'PET_EXISTS'
  | 'DATASET_EXISTS'
  | 'IMAGE_EXISTS';

export interface KakaoSignInResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    isExistedUser: boolean;
  };
}
