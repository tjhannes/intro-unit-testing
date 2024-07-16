export function add(a: any, b: any): number {
  if (typeof a !== "number") {
    throw new Error("Please input a number");
  }
  if (typeof b !== "number") {
    throw new Error("Please input a number");
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error();
  }
  if (a === Infinity || b === Infinity) {
    throw new Error();
  }
  return a + b;
}
