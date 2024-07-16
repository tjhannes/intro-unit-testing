import { add } from "../logic";

test("summing two positive numbers", () => {
  expect(add(1, 10)).toBe(11);
});

// YOUR TASK: write the following test cases and modify the add function so it fulfills the expected behavior.
//  You can decide how the code should behave in these scenarios. When something goes wrong, it could return 0, throw an Error or something else :)

test("summing two negative numbers", () => {
  // TODO
  const res = add(-1, -2);
  expect(res).toBe(-3);
});

test("summing a positive and a negative number", () => {
  expect(add(-7, 40)).toBe(33);
});

test("summing 0s", () => {
  expect(add(0, 0)).toBe(0);
});

test("inputting undefined", () => {
  // TODO
  expect(() => add(1, undefined)).toThrow();
});

test("inputting null", () => {
  expect(() => add(null, null)).toThrow();
});

test("inputting NaN", () => {
  expect(() => add(NaN, NaN)).toThrow();
});

test("inputting Infinity", () => {
  expect(() => add(Infinity, Infinity)).toThrow();
});
