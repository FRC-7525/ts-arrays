import { describe, it, expect } from "vitest";
import {
  putNumbersInArray,
  putNumbersInArraySorted,
  changeElementToHello,
  changeElement,
  findHello,
  nestedArrayGet,
} from "./index";

describe("Array Tests", () => {
  it("putNumbersInArray", () => {
    // Test with positive integers
    expect(putNumbersInArray(1, 2, 3)).toEqual([1, 2, 3]);
    // Test with a mix of positive, negative, and zero
    expect(putNumbersInArray(5, -3, 0)).toEqual([5, -3, 0]);
    // Test with all zeros
    expect(putNumbersInArray(0, 0, 0)).toEqual([0, 0, 0]);
  });

  it("putNumbersInArraySorted", () => {
    // Test with already sorted numbers
    expect(putNumbersInArraySorted(1, 2, 3)).toEqual([1, 2, 3]);
    // Test with reverse sorted numbers
    expect(putNumbersInArraySorted(3, 2, 1)).toEqual([1, 2, 3]);
    // Test with numbers in a random order
    expect(putNumbersInArraySorted(2, 3, 1)).toEqual([1, 2, 3]);
    // Test with negative numbers
    expect(putNumbersInArraySorted(-1, -5, -3)).toEqual([-5, -3, -1]);
    // Test with a mix of positive, negative, and zero
    expect(putNumbersInArraySorted(10, -5, 0)).toEqual([-5, 0, 10]);
    // Test with duplicate numbers
    expect(putNumbersInArraySorted(5, 1, 5)).toEqual([1, 5, 5]);
  });

  it("changeElementToHello", () => {
    // Test changing an element in the middle
    expect(changeElementToHello(["a", "b", "c"], 1)).toEqual(["a", "hello", "c"]);
    // Test changing the first element
    expect(changeElementToHello(["a", "b", "c"], 0)).toEqual(["hello", "b", "c"]);
    // Test changing the last element
    expect(changeElementToHello(["a", "b", "c"], 2)).toEqual(["a", "b", "hello"]);
    // Test with an out-of-bounds index (negative)
    expect(changeElementToHello(["a", "b", "c"], -1)).toEqual(["a", "b", "c"]);
    // Test with an out-of-bounds index (too high)
    expect(changeElementToHello(["a", "b", "c"], 3)).toEqual(["a", "b", "c"]);
    // Test with an empty array
    expect(changeElementToHello([], 0)).toEqual([]);
  });

  it("changeElement", () => {
    // Test changing an element to a new value
    expect(changeElement(["a", "b", "c"], 1, "world")).toEqual(["a", "world", "c"]);
    // Test changing an element to an empty string
    expect(changeElement(["a", "b", "c"], 0, "")).toEqual(["", "b", "c"]);
    // Test with an out-of-bounds index
    expect(changeElement(["a", "b", "c"], 5, "test")).toEqual(["a", "b", "c"]);
  });

  it("findHello", () => {
    // Test when 'hello' is in the array
    expect(findHello(["a", "b", "hello", "c"])).toBe(2);
    // Test when 'hello' is the first element
    expect(findHello(["hello", "world"])).toBe(0);
    // Test when 'hello' is not in the array
    expect(findHello(["a", "b", "c"])).toBe(-1);
    // Test with an empty array
    expect(findHello([])).toBe(-1);
  });

  it("nestedArrayGet", () => {
    // Test with a standard 2x2 array
    expect(nestedArrayGet([[1, 2], [3, 4]])).toBe(1);
    // Test with different numbers
    expect(nestedArrayGet([[100, 200], [300, 400]])).toBe(100);
    // Test with inner arrays of different lengths
    expect(nestedArrayGet([[5], [6, 7, 8]])).toBe(5);
    // Test with a 3x3 array
    expect(nestedArrayGet([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(1);
  });
});
