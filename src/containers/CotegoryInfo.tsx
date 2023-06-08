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
  const [rank1, setRank1] = React.useState<number>(0);
  const [rank2, setRank2] = React.useState<number>(0);
  const [rank3, setRank3] = React.useState<number>(0);
  const [memberNum, setMemberNum] = React.useState<number>(0);
  const [correctRate, setCorrectRate] = React.useState<
    Record<string, number | null>
  >({});

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
        correctRate: response.correctRate,
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
      setCorrectRate(response.correctRate || {});
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserRank() {
    try {
      const response = await MemberService.GetRank();
      const userRank = {
        memberId: response.memberId,
        memberNum: response.memberNum,
        rank1: response.rank?.groupA,
        rank2: response.rank?.groupB,
        rank3: response.rank?.groupC,
      };
      setMemberNum(userRank.memberNum || 0);
      setRank1(userRank.rank1 || 0);
      setRank2(userRank.rank2 || 0);
      setRank3(userRank.rank3 || 0);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserInfo();
    getUserRank();
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
        mmrScore={Math.round(mmr1)}
        tagList={[`그리디 알고리즘`, `브루트 포스`, `이진 탐색`, `DP`]}
        member={memberNum}
        rank={rank1}
        correctRate={[
          Math.round((correctRate.GREEDY || 0) * 100 * 10) / 10,
          Math.round((correctRate.BRUTE_FORCE || 0) * 100 * 10) / 10,
          Math.round((correctRate.BINARY_SEARCH || 0) * 100 * 10) / 10,
          Math.round((correctRate.DP || 0) * 100 * 10) / 10,
        ]}
      ></DetailResult>
      <DetailResult
        mmrTitle={mmrName2}
        mmrScore={Math.round(mmr2)}
        tagList={[`브루트 포스`, `깊이 우선 탐색`, `너비 우선 탐색`, `DP`]}
        member={memberNum}
        rank={rank2}
        correctRate={[
          Math.round((correctRate.BRUTE_FORCE || 0) * 100 * 10) / 10,
          Math.round((correctRate.DFS || 0) * 100 * 10) / 10,
          Math.round((correctRate.BFS || 0) * 100 * 10) / 10,
          Math.round((correctRate.DP || 0) * 100 * 10) / 10,
        ]}
      ></DetailResult>
      <DetailResult
        mmrTitle={mmrName3}
        mmrScore={Math.round(mmr3)}
        tagList={[
          `유니온 파인드`,
          `비트 마스킹`,
          `다익스트라`,
          `플로이드 워셜`,
        ]}
        member={memberNum}
        rank={rank3}
        correctRate={[
          Math.round((correctRate.UNION_FIND || 0) * 100 * 10) / 10,
          Math.round((correctRate.BIT_MASKING || 0) * 100 * 10) / 10,
          Math.round((correctRate.DIJKSTRA || 0) * 100 * 10) / 10,
          Math.round((correctRate.FLOYD_WARSHALL || 0) * 100 * 10) / 10,
        ]}
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
