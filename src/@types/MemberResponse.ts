interface MemberResponse {
  // id: number;
  // baekjoonHandle: string;
  // imgUrl: string;
  // nickName: string;
  // roles: string[];

  id: number;
  baekjoonHandle: string;
  imgUrl: string | null;
  nickName: string;
  roles: string[];
  memberTagGroupInformationResponses?: {
    tagGroupId: number;
    tagGroupName: string;
    mmr: number;
  }[];
  correctRate?: {
    DFS: number | null;
    BRUTE_FORCE: number | null;
    BINARY_SEARCH: number | null;
    UNION_FIND: number | null;
    BFS: number | null;
    DP: number | null;
    FLOYD_WARSHALL: number | null;
    GREEDY: number | null;
    BIT_MASKING: number | null;
    DIJKSTRA: number | null;
  };
}
