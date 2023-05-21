import styled from "styled-components";

interface Props {
  title?: string;
}

function TitleWithLine({ title }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Line />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #5465ff;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #000000;
  margin-top: 1em;
`;

export default TitleWithLine;
