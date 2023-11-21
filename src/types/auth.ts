export interface KakaoSignInResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    isExistedUser: boolean;
  };
}
