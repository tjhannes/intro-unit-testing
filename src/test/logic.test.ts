import { add } from "../logic";

test("summing two positive numbers", () => {
  expect(add(1, 10)).toBe(11);
});

// YOUR TASK: write the following test cases and modify the add function so it fulfills the expected behavior.
//  You can decide how the code should behave in these scenarios. When something goes wrong, it could return 0, throw an Error or something else :)

test("summing two negative numbers", () => {
  // TODO
});

test("summing a positive and a negative number", () => {
  // TODO
});

test("summing 0s", () => {
  // TODO
});

test("inputting undefined", () => {
  // TODO
});

test("inputting null", () => {
  // TODO
});

test("inputting NaN", () => {
  // TODO
});

test("inputting Infinity", () => {
  // TODO
});
