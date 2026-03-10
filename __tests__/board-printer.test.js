import { checkIfNoMovesLeft } from "../board-printer";
import { checkRow, checkColumn, checkDiagonal } from "../status-checker";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});


// Row win tests
test("should return true when player has all squares in a row", () => {
  const board = [
    ["X","X","X"],
    ["_","O","_"],
    ["O","_","_"]
  ];

  expect(checkRow(board, "X", 0)).toBe(true);
});

// Column win tests
test("should return true when player has all squares in a column", () => {
  const board = [
    ["X","O","_"],
    ["X","O","_"],
    ["X","_","_"]
  ];

  expect(checkColumn(board, "X", 0)).toBe(true);
});

// Diagonal win tests
test("should return true when player has all squares in a diagonal", () => {
  const board = [
    ["X","O","_"],
    ["_","X","_"],
    ["_","O","X"]
  ];

  expect(checkDiagonal(board, "X")).toBe(true);
});
