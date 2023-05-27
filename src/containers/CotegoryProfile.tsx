import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import MmrBar from "./MmrBar";
import { MemberService } from "../api";

interface Props {}

function CotegoryProfile({}: Props) {
  const [nickname, setNickname] = React.useState<string>("");
  const [rank, setRank] = React.useState<string>("");
  const [mmr1, setMmr1] = React.useState<number>(1200);
  const [mmr2, setMmr2] = React.useState<number>(1200);
  const [mmr3, setMmr3] = React.useState<number>(1200);

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
      setMemberInfo(userInfo);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ContentBox>
      <LeftBox>
        <Nickname>{`${memberInfo.nickName}`}</Nickname>
        <ProfileImage src="logo.png" alt="Profile Image" />
        <Rank>Gold 1</Rank>
      </LeftBox>
      <RightBox>
        <MmrBar mmrTitle="Type1" mmrScore={mmr1}></MmrBar>
        <MmrBar mmrTitle="Type2" mmrScore={mmr2}></MmrBar>
        <MmrBar mmrTitle="Type3" mmrScore={mmr3}></MmrBar>
      </RightBox>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 3em;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 1em 0 0 1em;
  align-items: center;
`;

const RightBox = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0 1em 1em 0;
`;

const Nickname = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1em;
  margin-top: 1em;
`;

const Rank = styled.h2`
  font-size: 1.5em;
  color: gold;
`;

export default CotegoryProfile;
