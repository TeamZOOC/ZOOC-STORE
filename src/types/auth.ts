export type UserState =
  | 'GUEST'
  | 'NO_PET'
  | 'PET-EXISTS'
  | 'DATASET-EXISTS'
  | 'IMAGE-EXISTS';

export interface KakaoSignInResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    isExistedUser: boolean;
  };
}
