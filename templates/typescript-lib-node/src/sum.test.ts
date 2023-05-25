/**
 * @file sum.test.ts
 * @author dworac <mail@dworac.com>
 *
 * This file contains the unit testing for the sum function.
 */
import { sum } from "./sum";

test("sum", () => {
  expect(sum({ a: 1, b: 2 })).toBe(3);
  expect(sum({ a: 1, b: 3 })).not.toBe(-2);
  expect(sum({ a: -2, b: 3 })).toBe(1);
  expect(sum({ a: -2, b: -4 })).toBe(-6);
});
