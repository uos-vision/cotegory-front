import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";
import CotegoryProfile from "./CotegoryProfile";
import DetailResult from "./DetailResult";
import { MemberService } from "../api";

interface Props {}

function CotegoryInfo({}: Props) {
  const [nickname, setNickname] = React.useState<string>("");
  const [rank, setRank] = React.useState<string>("");
  const [mmr1, setMmr1] = React.useState<number>(1200);
  const [mmr2, setMmr2] = React.useState<number>(1200);
  const [mmr3, setMmr3] = React.useState<number>(1200);
  const [mmrName1, setMmrName1] = React.useState<string>("");
  const [mmrName2, setMmrName2] = React.useState<string>("");
  const [mmrName3, setMmrName3] = React.useState<string>("");

  const [memberInfo, setMemberInfo] = useState<MemberResponse>(
    {} as MemberResponse
  );

  async function getUserInfo() {
    try {
      const response = await MemberService.information();
      const userInfo = {
        id: response.id,
        baekjoonHandle: response.baekjoonHandle,
        imgUrl: response.imgUrl,
        nickName: response.nickName,
        roles: response.roles,
      };

      if (
        response.memberTagGroupInformationResponses &&
        response.memberTagGroupInformationResponses.length >= 3
      ) {
        for (const tagGroup of response.memberTagGroupInformationResponses) {
          if (tagGroup.tagGroupId === 1) {
            setMmr1(tagGroup.mmr);
            setMmrName1(tagGroup.tagGroupName);
          } else if (tagGroup.tagGroupId === 2) {
            setMmr2(tagGroup.mmr);
            setMmrName2(tagGroup.tagGroupName);
          } else if (tagGroup.tagGroupId === 3) {
            setMmr3(tagGroup.mmr);
            setMmrName3(tagGroup.tagGroupName);
          }
        }
      }

      setNickname(response.nickName);
      setMemberInfo(userInfo);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Wrapper>
      <TitleWithLine title="요약" />
      <CotegoryProfile
        nickname={nickname}
        mmr1={mmr1}
        mmr2={mmr2}
        mmr3={mmr3}
        mmrName1={mmrName1}
        mmrName2={mmrName2}
        mmrName3={mmrName3}
      ></CotegoryProfile>
      <TitleWithLine title="세부 결과" />
      <DetailResult
        mmrTitle={mmrName1}
        mmrScore={Math.round((mmr1 / 2400) * 100)}
      ></DetailResult>
      <DetailResult
        mmrTitle={mmrName2}
        mmrScore={Math.round((mmr2 / 2400) * 100)}
      ></DetailResult>
      <DetailResult
        mmrTitle={mmrName3}
        mmrScore={Math.round((mmr3 / 2400) * 100)}
      ></DetailResult>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default CotegoryInfo;
