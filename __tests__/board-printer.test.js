import { checkIfNoMovesLeft } from "../board-printer";
import { checkRow, checkColumn, checkDiagonal } from "../status-checker";
import { checkIfNoMovesLeft, printBoard } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board1 = [];
  expect(checkIfNoMovesLeft(board1)).toBe(true);

  const board2 = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];
  expect(checkIfNoMovesLeft(board2)).toBe(false);

  const board3 = [
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["O", "O", "X"],
  ];
  expect(checkIfNoMovesLeft(board3)).toBe(true);
});

describe("printBoard", () => {
  it("returns correct string format of the board", () => {
    const divider = "\n=================\n";
    const board1 = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const boardSketch1 =
      divider +
      ["  X  |     |   ", "     |  X  |   ", "  O  |  O  |  X"].join(divider) +
      divider;
    expect(printBoard(board1)).toBe(boardSketch1);

    const board2 = [
      ["O", "_", "O"],
      ["_", "_", "X"],
      ["_", "X", "O"],
    ];
    const boardSketch2 =
      divider +
      ["  O  |     |  O", "     |     |  X", "     |  X  |  O"].join(divider) +
      divider;
    expect(printBoard(board2)).toBe(boardSketch2);
  });

  it("throws an error if the board is not square", () => {
    const board = [
      ["O", "_", "O", "_"],
      ["_", "_", "X"],
      ["_", "X", "O"],
    ];

    expect(() => printBoard(board)).toThrow("Board is not square!");
  });

  it("throws an error if the board includes signs other than X, O, and _", () => {
    const board = [
      ["O", "_", "Y"],
      ["_", "_", "X"],
      ["_", "X", "O"],
    ];

    expect(() => printBoard(board)).toThrow("Invalid sign in Board array!");
  });

  it("throws an error if the board is empty, null, or undefined", () => {
    const board = [];
    expect(() => printBoard(board)).toThrow("Board is not valid!");

    expect(() => printBoard(null)).toThrow("Board is not valid!");

    expect(() => printBoard(undefined)).toThrow("Board is not valid!");
  });
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
