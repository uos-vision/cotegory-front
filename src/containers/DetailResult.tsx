import styled from "styled-components";

function DetailResult() {
  return (
    <Wrapper>
      <TitleBox>
        <TypeTitle>Type 1</TypeTitle>
        <TypeBody>깊이 우선 탐색, 너비 우선 탐색, 그리디 알고리즘</TypeBody>
      </TitleBox>
      <ContentBox>
        <LeftBox>
          <TypeTitle>Score</TypeTitle>
        </LeftBox>
        <RightBox></RightBox>
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;
const TitleBox = styled.div`
  margin-top: 1em;
  width: 100%;
  align-items: start;
  display: flex;
  flex-direction: row;
`;

const TypeTitle = styled.h1`
  font-size: 1.25em;
  margin-left: 1em;
  color: black;
`;

const TypeBody = styled.body`
  font-size: 1em;
  margin-top: 1em;
  margin-left: 2em;
  color: black;
`;
const ContentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 1em;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
`;

const LeftBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export default DetailResult;
