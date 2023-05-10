import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";
import { ListFormat } from "typescript";

interface MemberRequest {}

interface MemberResponse {
  // "id": 4,
  // "baekjoonHandle": "tori1753",
  // "imgUrl": null,
  // "nickName": "UOS닉네임",
  // "roles": [
  //   "ROLE_USER"
  // ]
  id: number;
  baekjoonHandle: string;
  imgUrl: string;
  nickName: string;
  roles: string[];
}

class MemberService extends ApiBase {
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

  public information(): Promise<MemberResponse> {
    return this.baseHTTP
      .get("api/member/information")
      .then((response) => {
        console.log("response data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new MemberService();
