import Reqct, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";
import SubmissionService from "../api/SubmissionService";

interface Props {}

function ProblemHistory({}: Props) {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [sort, setSort] = useState<string>("DESC");
  useEffect(() => {
    async function getProblemList() {
      try {
        const ListResponse = await SubmissionService.SubmissionQuiz({
          page: page,
          size: size,
          sort: sort,
        });
        const QuizList: SubmissionListResponse = {
          content: [],
          pageable: {
            sort: {
              empty: false,
              sorted: false,
              unsorted: false,
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 0,
            paged: false,
            unpaged: false,
          },
          totalPages: 0,
          totalElements: 0,
          last: false,
          size: 0,
          number: 0,
          sort: {
            empty: false,
            sorted: false,
            unsorted: false,
          },
          numberOfElements: 0,
          first: false,
          empty: false,
        };
      } catch (error) {
        console.error(error);
      }
    }
  });
  return (
    <Wrapper>
      <TitleWithLine title="퀴즈 결과"></TitleWithLine>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

export default ProblemHistory;
