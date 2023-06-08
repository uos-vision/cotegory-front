import styled from "styled-components";

interface Props {
  mmrTitle?: string;
  mmrScore?: number;
  tagList?: string[];
  rank?: number;
  member?: number;
  correctRate?: number[];
}
function DetailResult({
  mmrTitle,
  mmrScore,
  tagList,
  rank,
  member,
  correctRate,
}: Props) {
  return (
    <Wrapper>
      <TitleBox>
        <TypeTitle>{mmrTitle}</TypeTitle>
        <TypeBody>{tagList?.join(", ")}</TypeBody>
      </TitleBox>
      <ContentBox>
        <LeftBox>
          <Text>SCORE</Text>
          <ScoreBox>
            <Score mmr={mmrScore}>{mmrScore}</Score>
          </ScoreBox>
        </LeftBox>
        <RightBox>
          <Text>알고리즘 별 정답률</Text>
          <CorrectBox>
            <CorrectInnerBox>
              <CorrectTopBox>{tagList && tagList[0]}</CorrectTopBox>
              <CorrectBottomBox>
                {correctRate && correctRate[0]}%
              </CorrectBottomBox>
            </CorrectInnerBox>
            <CorrectInnerBox>
              <CorrectTopBox>{tagList && tagList[1]}</CorrectTopBox>
              <CorrectBottomBox>
                {correctRate && correctRate[1]}%
              </CorrectBottomBox>
            </CorrectInnerBox>
            <CorrectInnerBox>
              <CorrectTopBox>{tagList && tagList[2]}</CorrectTopBox>
              <CorrectBottomBox>
                {correctRate && correctRate[2]}%
              </CorrectBottomBox>
            </CorrectInnerBox>
            <CorrectInnerBox>
              <CorrectTopBox>{tagList && tagList[3]}</CorrectTopBox>
              <CorrectBottomBox>
                {correctRate && correctRate[3]}%
              </CorrectBottomBox>
            </CorrectInnerBox>
          </CorrectBox>
        </RightBox>
        <LeftBox>
          <Text>RANK</Text>
          <RankBox>
            <Rank>
              {rank} / {member}
            </Rank>
          </RankBox>
        </LeftBox>
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

const DetailText = styled.body`
  font-size: 1em;
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
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  if (mmr && mmr <= 600) {
    return "#13c4a3";
  } else if (mmr && mmr <= 1200) {
    return "#36f1cd";
  } else if (mmr && mmr <= 1800) {
    return "#788bff";
  } else {
    return "#5465ff";
  }
};

const Score = styled.h1<{ mmr?: number }>`
  font-size: 1.75em;
  color: ${({ mmr }) => getColor(mmr)};
  font-weight: 600;
`;

const RankBox = styled.div`
  width: 60%;
  height: 5em;
  background-color: #5465ff;
  border-radius: 1em;
  align-items: center;
  margin-bottom: 1em;
`;

const Rank = styled.h1`
  height: 5em;
  font-size: 1.75em;
  font-weight: 500;
  color: #ffffff;
`;

const CorrectBox = styled.div`
  width: 100%;
  height: 5em;
  background-color: #e9e9e9;
  border-radius: 1em;
  align-items: center;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
`;
const CorrectInnerBox = styled.div`
  width: 25%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 1em 1em 1em 1em;
  margin-inline: 0.5em;
`;
const CorrectTopBox = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 1em 1em 0 0;
  background-color: #788bff;
  color: #ffffff;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 600;
`;

const CorrectBottomBox = styled.div`
  width: 100%;
  border-radius: 1em;
  background-color: #ffffff;
  color: #5465ff;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 0.25em;
`;
const Correct = styled.h1`
  height: 5em;
  font-size: 1.75em;
  font-weight: 500;
  color: #ffffff;
`;
export default DetailResult;
