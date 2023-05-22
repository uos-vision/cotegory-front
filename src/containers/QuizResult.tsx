import styled from "styled-components";

interface Props {}
function QuizResult() {
  return (
    <Wrapper>
      <ContentBox></ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 1em;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
`;
