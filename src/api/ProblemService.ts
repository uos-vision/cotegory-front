import axios from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";
class ProblemService extends ApiBase {
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

  async TodayProblem(): Promise<ProblemResponse> {
    return this.baseHTTP
      .get("/api/recommend/today")
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new ProblemService();
