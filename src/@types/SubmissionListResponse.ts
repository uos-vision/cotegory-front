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
