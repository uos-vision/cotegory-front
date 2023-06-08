import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
import SignInService from "./SignInService";

class ApiBase {
  protected readonly baseHTTP: AxiosInstance;
  constructor(url?: string) {
    // const baseServerURL = "http://localhost:8080";
    const baseServerURL = "http://3.35.115.92:8080"; //서버와 통신
    this.baseHTTP = axios.create({
      baseURL: `${baseServerURL}/${url ?? ""}`,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  protected static handleResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  protected static async handleError(error: AxiosError) {
    if (error.response && error.response.status === 403) {
      // 403 에러가 발생한 경우
      // 새로운 토큰을 받아오는 로직을 처리
      await SignInService.refreshToken();
      // 이전 요청을 다시 시도
      return axios(error.config as AxiosRequestConfig); // 오류 부분 수정
    }
    await SignInService.refreshToken();

    throw error;
  }
}

export default ApiBase;
