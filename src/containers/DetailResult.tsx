import styled from "styled-components";

interface Props {
  mmrTitle?: string;
  mmrScore?: number;
}
function DetailResult({ mmrTitle, mmrScore }: Props) {
  return (
    <Wrapper>
      <TitleBox>
        <TypeTitle>{mmrTitle}</TypeTitle>
        <TypeBody>깊이 우선 탐색, 너비 우선 탐색, 그리디 알고리즘</TypeBody>
      </TitleBox>
      <ContentBox>
        <LeftBox>
          <Text>Score</Text>
          <ScoreBox>
            <Score mmr={mmrScore}>{mmrScore}</Score>
          </ScoreBox>
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

const Text = styled.h2`
  font-size: 1.25em;
  color: #000000;
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

const ScoreBox = styled.div`
  width: 60%;
  height: 5em;
  background-color: #ffffff;
  border-radius: 1em;
  align-items: center;
  margin-bottom: 1em;
`;

const getColor = (mmr?: number) => {
  if (mmr && mmr <= 25) {
    return "#13c4a3";
  } else if (mmr && mmr <= 50) {
    return "#36f1cd";
  } else if (mmr && mmr <= 75) {
    return "#788bff";
  } else {
    return "#5465ff";
  }
};

const Score = styled.h1<{ mmr?: number }>`
  font-size: 2em;
  color: ${({ mmr }) => getColor(mmr)};
  font-weight: 700;
`;
export default DetailResult;
