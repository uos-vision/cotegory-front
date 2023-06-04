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

  public async SubmissionQuiz(
    submissionListInfo: SubmissionListRequest
  ): Promise<SubmissionListResponse> {
    console.log("request data:", submissionListInfo);
    try {
      const response = await this.baseHTTP.get<SubmissionListResponse>(
        "/api/submission/list",
        {
          params: submissionListInfo,
        }
      );
      console.log("response data:", response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // 또는 적절한 오류 처리
    }
  }
}

export default new SubmissionService();
