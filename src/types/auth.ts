export type UserState =
  | 'NON-MEMBER'
  | 'MEMBER'
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
