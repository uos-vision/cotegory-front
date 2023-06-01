import axios from "axios";
import Cookies from "js-cookie";
import ApiBase from "./ApiBase";

interface SubmissionList {
  quizId: number;
  submissionId: number;
  quizCorrectRate: number;
  selectTag: string;
  answerTag: string;
  isCorrect: boolean;
  submitTime: string;
  playTime: number;
}

interface SubmissionListRequest {
  page: number;
  size: number;
  sort: string;
}

interface SubmissionListResponse {
  content: SubmissionList[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

class SubmissionService extends ApiBase {
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

  public SubmissionQuiz({
    ...submissionListInfo
  }: SubmissionListRequest): Promise<SubmissionListResponse> {
    console.log("request data : ", submissionListInfo);
    return this.baseHTTP
      .post("/api/submission/list", {
        ...submissionListInfo,
      })
      .then((response) => {
        console.log("response.data", response.data);
        return response.data;
      })
      .catch(ApiBase.handleError);
  }
}

export default new SubmissionService();
