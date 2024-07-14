// This function showcases what mocking is by providing a function with 2 mock functions as input

import { ExamResults, validateExamResults } from "../logic-adv";

// The idea behind this is that we only want to test the logic of validateExamResults and not of its dependencies
describe("validateExamResults", () => {
  const examResults: ExamResults = { userId: 1, answers: [1, 2, 3] };
  // Examples or "real" functions to input here - but we don't want to test the other functions,
  // we only want to test the behavior of validateExamResults
  //
  // const validateResults = (a: ExamResults) => {
  //     return a.answers.length === 3
  // }
  // const failByThrowingError = (a: ExamResults): void => {
  //     throw new Error(`${a.userId} has failed the exam`)
  // }

  let mockValidationFunction: any;
  let mockErrorFunction: any;

  beforeAll(() => {
    // setup mocking functions for our code, so we can focus on validateExamResults
    mockValidationFunction = jest.fn();
    mockErrorFunction = jest.fn();
  });

  afterEach(() => {
    // Reset the mocks after each test, otherwise the counters will be wrong!
    jest.resetAllMocks();
  });

  it("should call the validation function", () => {
    // Fake a return value for the mock function
    mockValidationFunction.mockReturnValue(true);

    validateExamResults(examResults, mockValidationFunction, mockErrorFunction);

    // Assert that we call (or don't call) the mock functions
    expect(mockValidationFunction).toHaveBeenCalledTimes(1);
    expect(mockErrorFunction).not.toHaveBeenCalled();
  });

  it("should call the error function is the validation is false", () => {
    mockValidationFunction.mockReturnValue(false);

    validateExamResults(examResults, mockValidationFunction, mockErrorFunction);

    expect(mockValidationFunction).toHaveBeenCalledTimes(1);
    expect(mockErrorFunction).toHaveBeenCalledTimes(1);
  });
});
