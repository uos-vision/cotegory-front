function convertTag(tag: string) {
  switch (tag) {
    case "DP":
      return "DP";
    case "BRUTE_FORCE":
      return "브루트포스";
    case "BINARY_SEARCH":
      return "이진 탐색";
    case "GREEDY":
      return "그리디";
    case "BIT_MASKING":
      return "비트마스킹";
    case "FLOYD_WARSHALL":
      return "플로이드 워셜";
    case "DIJKSTRA":
      return "다익스트라";
    case "UNION_FIND":
      return "유니온 파인드";

    default:
      return tag;
  }
}

export default convertTag;
