import { makeMove } from "../move-maker.js";
const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];
test("returns true for a valid move",()=>{
    expect(makeMove(board,"1,2","X")).toBe(true)
})

test("returns false for an invalid move", () => {
  expect(makeMove(board, "1,1", "X")).toBe(false);
});

test("returns false for an invalid input ", () => {
  expect(makeMove(board, "9,2", "X")).toBe(false);
});