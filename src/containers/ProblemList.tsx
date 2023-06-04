import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProblemListBox from "./ProblemListBox";
import SubmissionService from "../api/SubmissionService";

interface Props {
  pageSize: number;
}

function ProblemList({ pageSize }: Props) {
  const [problemList, setProblemList] = useState<SubmissionList[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState<SubmissionList[]>([]);

  useEffect(() => {
    fetchProblemList();
  }, [currentPage, pageSize]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubmissionService.SubmissionQuiz({
          page: currentPage - 1,
          size: pageSize,
          sort: "DESC",
        });
        const { content, totalPages } = response;
        setProblemList(content);
        setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = currentPage * pageSize;
    const slicedItems = problemList.slice(start, end);
    console.log(slicedItems); // 확인용 로그
    setCurrentItems(slicedItems);
  }, [problemList, currentPage, pageSize]);

  async function fetchProblemList() {
    try {
      const response = await SubmissionService.SubmissionQuiz({
        page: currentPage - 1,
        size: pageSize,
        sort: "DESC",
      });
      const { content, totalPages } = response;
      setProblemList(content);
      setPageCount(totalPages);
      setCurrentItems(content);
    } catch (error) {
      console.error(error);
    }
  }
  const changePage = (page: number) => {
    setCurrentPage(page);
    fetchProblemList();
  };

  const goToNextPage = () => {
    if (currentPage < pageCount) {
      changePage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  return (
    <Wrapper>
      {currentItems.map((item) => (
        <ProblemListBox
          key={item.quizId}
          date={item.submitTime.split("T")[0]}
          quizId={item.quizId}
          selectTag={item.selectTag}
          answerTag={item.answerTag}
          playTime={item.playTime}
        />
      ))}
      <Pagination>
        {Array.from({ length: pageCount }, (_, index) => (
          <PageNumber
            key={index + 1}
            onClick={() => changePage(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
      <ButtonWrapper>
        <PreviousButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          이전
        </PreviousButton>
        <NextButton onClick={goToNextPage} disabled={currentPage === pageCount}>
          다음
        </NextButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const PageNumber = styled.button<{ active: boolean }>`
  padding: 0.5em;
  margin: 0 0.5em;
  border-radius: 0.25em;
  background-color: ${(props) => (props.active ? "#ececec" : "#ffffff")};
  border: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const PreviousButton = styled.button`
  padding: 0.5em 1em;
  background-color: #ececec;
  border: none;
  border-radius: 0.25em;
  margin-inline: 1em;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NextButton = styled.button<{ disabled: boolean }>`
  border-radius: 0.25em;
  padding: 0.5em 1em;
  background-color: #ececec;
  border: none;
  margin-inline: 1em;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default ProblemList;
