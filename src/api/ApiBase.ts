import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class ApiBase {
  protected readonly baseHTTP: AxiosInstance;
  constructor(url?: string) {
    const baseServerURL = "http://localhost:8080";
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

  protected static handleError(error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
}

export default ApiBase;
