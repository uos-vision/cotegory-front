import axios from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";
interface QuizResponse {
  quizId: number;
  answerTag: string;
  tagGroupResponse: {
    tagGroupId: number;
    tagGroupName: string;
    tags: string[];
  };
  problemNumber: number;
  origin: string;
  title: string;
  url: string;
  mmr: number;
  problemBody: string;
  problemInput: string;
  problemOutput: string;
  sampleInput: string;
  sampleOutput: string;
  timeLimit: number;
  memoryLimit: number;
}
interface SubmissionRequest {
  quizId: number;
  selectTag: string;
  playTime: number;
}
class QuizService extends ApiBase {
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

  public GetQuiz(): Promise<QuizResponse> {
    return this.baseHTTP
      .get("api/quiz")
      .then((response) => {
        console.log("response data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }

  public SubmissionQuiz({
    ...submissionInfo
  }: SubmissionRequest): Promise<SubmissionResponse> {
    console.log("request data : ", submissionInfo);
    return this.baseHTTP
      .post("/api/submission", {
        ...submissionInfo,
      })
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }

  public SkipQuiz({ ...quizId }) {
    return this.baseHTTP
      .post("api/submission/skip", {
        ...quizId,
      })
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new QuizService();
