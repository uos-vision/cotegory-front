import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";
interface MemberResponse {
  id: number;
  baekjoonHandle: string;
  imgUrl: string | null;
  nickName: string;
  roles: string[];
  memberTagGroupInformationResponses?: {
    tagGroupId: number;
    tagGroupName: string;
    mmr: number;
  }[];
  correctRate?: {
    DFS: number | null;
    BRUTE_FORCE: number | null;
    BINARY_SEARCH: number | null;
    UNION_FIND: number | null;
    BFS: number | null;
    DP: number | null;
    FLOYD_WARSHALL: number | null;
    GREEDY: number | null;
    BIT_MASKING: number | null;
    DIJKSTRA: number | null;
  };
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

  public ChangeImage({ ...image }) {
    return this.baseHTTP
      .post("api/member/img/update", {
        ...image,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }

  public ChangeNickname({ ...nickname }) {
    return this.baseHTTP
      .post("api/member/change-nickname", {
        ...nickname,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }

  public ChangeBackjoonHandle({ ...backjoonHandle }) {
    return this.baseHTTP
      .post("api/member/change-backjoonhandle", {
        ...backjoonHandle,
      })
      .then(ApiBase.handleResponse)
      .catch(ApiBase.handleError);
  }
}

export default new MemberService();
