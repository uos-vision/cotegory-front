interface QuizResponse {
  quizId: number;
  answerTag: string;
  tagGroupResponse: {
    tagGroupId: number;
    tagGroupName: string;
    tags: string[];
  };
  problemNumber: number;
  origin: string;
  title: string;
  url: string;
  mmr: number;
  problemBody: string;
  problemInput: string;
  problemOutput: string;
  sampleInput: string;
  sampleOutput: string;
  timeLimit: number;
  memoryLimit: number;
}
