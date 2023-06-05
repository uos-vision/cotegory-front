import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProblemListBox from "./ProblemListBox";
import SubmissionService from "../api/SubmissionService";

function ProblemList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [problemList, setProblemList] = useState<SubmissionList[]>([]);

  const pageSize = 10; // 페이지당 아이템 개수

  useEffect(() => {
    fetchProblemList();
  }, [currentPage]);

  async function fetchProblemList() {
    try {
      const response = await SubmissionService.SubmissionQuiz({
        page: currentPage - 1,
        size: pageSize,
        sort: "DESC",
      });
      const { content, totalPages } = response;
      setProblemList(content);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // 페이지 이동 시 기존 문제 정보 초기화
    setProblemList([]);
  }, [currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
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
      {problemList.map((item) => (
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
        <PageNumber
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          active
        >
          이전
        </PageNumber>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageNumber
            key={index + 1}
            onClick={() => changePage(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </PageNumber>
        ))}
        <PageNumber
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          active
        >
          다음
        </PageNumber>
      </Pagination>
    </Wrapper>
  );
}

// 스타일 컴포넌트 등 필요한 부분 생략

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

export default ProblemList;
