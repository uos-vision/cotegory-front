import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import MmrBar from "./MmrBar";
import { MemberService } from "../api";

interface Props {
  mmr1?: number;
  mmr2?: number;
  mmr3?: number;
  mmrName1?: string;
  mmrName2?: string;
  mmrName3?: string;
  nickname?: string;
}

function CotegoryProfile({
  mmr1,
  mmr2,
  mmr3,
  mmrName1,
  mmrName2,
  mmrName3,
  nickname,
}: Props) {
  return (
    <ContentBox>
      <LeftBox>
        <Nickname>{`${nickname}`}</Nickname>
        <ProfileImage src="logo.png" alt="Profile Image" />
        <Rank>Gold 1</Rank>
      </LeftBox>
      <RightBox>
        <MmrBar mmrTitle={mmrName1} mmrScore={mmr1}></MmrBar>
        <MmrBar mmrTitle={mmrName2} mmrScore={mmr2}></MmrBar>
        <MmrBar mmrTitle={mmrName3} mmrScore={mmr3}></MmrBar>
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
