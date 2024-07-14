export type ExamResults = { userId: number; answers: number[] };

export function validateExamResults(
  result: ExamResults,
  validationFunction: (a: ExamResults) => boolean,
  errorFunction: (b: ExamResults) => void
): void {
  const resultsAreCorrect = validationFunction(result);

  if (!resultsAreCorrect) {
    errorFunction(result);
  }
}
