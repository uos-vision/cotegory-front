interface MemberResponse {
  // "id": 4,
  // "baekjoonHandle": "tori1753",
  // "imgUrl": null,
  // "nickName": "UOS닉네임",
  // "roles": [
  //   "ROLE_USER"
  // ]
  id: number;
  baekjoonHandle: string;
  imgUrl: string;
  nickName: string;
  roles: string[];
}
// interface MemberResponse {
//   id: number;
//   baekjoonHandle: string;
//   imgUrl: string | null;
//   nickName: string;
//   roles: string[];
//   memberTagGroupInformationResponses: {
//     tagGroupId: number;
//     tagGroupName: string;
//     mmr: number;
//   }[];
//   correctRate: {
//     DFS: number | null;
//     BRUTE_FORCE: number | null;
//     BINARY_SEARCH: number | null;
//     UNION_FIND: number | null;
//     BFS: number | null;
//     DP: number | null;
//     FLOYD_WARSHALL: number | null;
//     GREEDY: number | null;
//     BIT_MASKING: number | null;
//     DIJKSTRA: number | null;
//   };
// }
