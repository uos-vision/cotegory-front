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

interface DuplicationRequest {
  loginId: string;
}

interface DuplicationResponse {
  duplicated: boolean;
}

interface BaekjoonRequest {
  baekjoonHandle: string;
}

interface BaekjoonResponse {
  exist: boolean;
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
  public duplication({
    ...idInfo
  }: DuplicationRequest): Promise<DuplicationResponse> {
    console.log("request data:", idInfo);
    return this.baseHTTP
      .post("duplicate-check", {
        ...idInfo,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }
  public baekjoon({
    ...baekjoonInfo
  }: BaekjoonRequest): Promise<BaekjoonResponse> {
    console.log("request data:", baekjoonInfo);
    return this.baseHTTP
      .post("baekjoonhandle-check", {
        ...baekjoonInfo,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }
}
export default new RegisterService();
