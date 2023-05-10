import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";

interface SignInRequest {
  loginId: string;
  pw: string;
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
    const jwtToken = Cookies.get("jwtToken");
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
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new SignInService();
