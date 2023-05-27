import styled from "styled-components";

interface Props {
  mmrTitle?: string;
  mmrScore?: number;
}

function MmrBar({ mmrTitle, mmrScore }: Props) {
  return (
    <Wrapper>
      <MmrTitle>{mmrTitle}</MmrTitle>
      <BlankBar>
        <ColorBar mmr={mmrScore} />
      </BlankBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
`;

const MmrTitle = styled.h2`
  font-size: 1em;
`;

const BlankBar = styled.div`
  width: 100%;
  height: 1em;
  margin-left: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: #d9d9d9;
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

const ColorBar = styled.div<{ mmr?: number }>`
  width: ${({ mmr }) => (mmr ? `${(mmr / 2400) * 100}%` : "0%")};
  height: 1em;
  background-color: ${({ mmr }) =>
    getColor(mmr ? (mmr / 2400) * 100 : undefined)};
`;

export default MmrBar;
