import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";

interface SignInRequest {
  loginId: string;
  pw: string;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  expTimeRefreshToken: string;
  expTimeAccessToken: string;
}

class SignInService extends ApiBase {
  private jwtToken: string | null = null;

  public constructor() {
    super();
    const jwtToken = Cookies.get("accessToken");
    this.jwtToken = jwtToken !== undefined ? jwtToken : null;
    if (this.jwtToken) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.jwtToken}`;
    }
  }

  public signin({ ...signinInfo }: SignInRequest): Promise<SignInResponse> {
    console.log("request data:", signinInfo);
    return this.baseHTTP
      .post("generateToken", {
        ...signinInfo,
      })
      .then((response) => {
        const { accessToken, refreshToken } = response.data;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        this.jwtToken = accessToken;
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken); // Store the refresh token in a secure manner
        return response.data;
      })
      .catch(ApiBase.handleError);
  }

  public refreshToken(): Promise<RefreshTokenResponse> {
    const refreshToken = Cookies.get("refreshToken");
    const accessToken = Cookies.get("accessToken");
    return this.baseHTTP
      .post("refreshToken", {
        accessToken: accessToken,
        refreshToken: refreshToken,
      })
      .then((response) => {
        const { accessToken, refreshToken } = response.data;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        this.jwtToken = accessToken;
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}
export default new SignInService();
