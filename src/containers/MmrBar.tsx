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

const ColorBar = styled.div<{ mmr?: number }>`
  width: ${({ mmr }) => (mmr ? `${(mmr / 2400) * 100}%` : "0%")};
  height: 1em;
  background-color: #5465ff;
`;

export default MmrBar;
