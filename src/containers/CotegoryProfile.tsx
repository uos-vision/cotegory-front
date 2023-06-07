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

const calculateRank = (averageMmr: number) => {
  const rankIndex = Math.floor(averageMmr / 500);
  const ranks = ["Bronze", "Silver", "Gold", "Diamond", "Platinum"];
  const subRanks = ["5", "4", "3", "2", "1"];
  const rank = ranks[rankIndex];
  const subRank = subRanks[Math.floor((averageMmr % 500) / 100)];
  return `${rank}${subRank}`;
};

const calculateColor = (rank: string) => {
  switch (rank) {
    case "Bronze5":
      return "brown";
    case "Bronze4":
      return "darkgoldenrod";
    case "Bronze3":
      return "saddlebrown";
    case "Bronze2":
      return "peru";
    case "Bronze1":
      return "sienna";
    case "Silver5":
      return "silver";
    case "Silver4":
      return "lightgray";
    case "Silver3":
      return "gainsboro";
    case "Silver2":
      return "darkgray";
    case "Silver1":
      return "dimgray";
    case "Gold5":
      return "gold";
    case "Gold4":
      return "goldenrod";
    case "Gold3":
      return "khaki";
    case "Gold2":
      return "lightgoldenrodyellow";
    case "Gold1":
      return "palegoldenrod";
    case "Diamond5":
      return "cyan";
    case "Diamond4":
      return "deepskyblue";
    case "Diamond3":
      return "dodgerblue";
    case "Diamond2":
      return "royalblue";
    case "Diamond1":
      return "mediumblue";
    case "Platinum5":
      return "lightcyan";
    case "Platinum4":
      return "lightskyblue";
    case "Platinum3":
      return "paleturquoise";
    case "Platinum2":
      return "mediumturquoise";
    case "Platinum1":
      return "darkturquoise";
    default:
      return "gold";
  }
};

function CotegoryProfile({
  mmr1,
  mmr2,
  mmr3,
  mmrName1,
  mmrName2,
  mmrName3,
  nickname,
}: Props) {
  const mmrCount = (mmr1 ? 1 : 0) + (mmr2 ? 1 : 0) + (mmr3 ? 1 : 0);
  const averageMmr = (mmr1 || 0) + (mmr2 || 0) + (mmr3 || 0);
  const rank = calculateRank(averageMmr / mmrCount);
  const rankColor = calculateColor(rank);

  return (
    <ContentBox>
      <LeftBox>
        <Nickname>{`${nickname}`}</Nickname>
        <ProfileImage src="logo.png" alt="Profile Image" />
        <Rank color={rankColor}>{rank}</Rank>
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
  color: ${(props) => props.color || "gold"};
`;

export default CotegoryProfile;
