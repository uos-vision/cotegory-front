import axios from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";

class ProblemService extends ApiBase {
  private jwtToken: string | null = null;

  public constructor() {
    super();
    const jwtToken = Cookies.get("accessToken");
    this.jwtToken = jwtToken !== undefined ? jwtToken : null;
  }

  async TodayProblem(): Promise<ProblemResponse> {
    const headers = this.jwtToken
      ? { Authorization: `Bearer ${this.jwtToken}` }
      : undefined;

    return this.baseHTTP
      .get("/api/recommend/today", { headers })
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }

  async AiProblem(): Promise<ProblemResponse> {
    const headers = this.jwtToken
      ? { Authorization: `Bearer ${this.jwtToken}` }
      : undefined;
    return this.baseHTTP
      .get("/api/recommend/ai", { headers })
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new ProblemService();
