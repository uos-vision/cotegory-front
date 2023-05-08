import axios, { AxiosInstance } from "axios";
import ApiBase from "./ApiBase";

interface RegisterRequest {
  loginId: string;
  pw: string;
  baekjoonHandle: string;
  nickName: string;
}

interface RegisterResponse {
  exceptionType: string;
  exceptionClassName: string;
  exceptionMessage: string;
}

class RegisterService extends ApiBase {
  public register({
    ...registerInfo
  }: RegisterRequest): Promise<RegisterResponse> {
    console.log("request data:", registerInfo); // 추가된 부분
    return this.baseHTTP
      .post("register", {
        ...registerInfo,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }
}
export default new RegisterService();
