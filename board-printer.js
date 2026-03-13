/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  if (board === null || board === undefined || board.length === 0)
    throw new Error("Board is not valid!");
  const validSigns = "XO_";
  const divider = "\n=================\n";
  const boardSketch = board.map((row) => {
    if (row.length !== board.length) throw new Error("Board is not square!");
    return (
      "  " +
      row
        .map((cell) => {
          if (!validSigns.includes(cell))
            throw new Error("Invalid sign in Board array!");
          return cell === "_" ? " " : cell;
        })
        .join("  |  ")
    );
  });

  return divider + boardSketch.join(divider) + divider;
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  if (board.length === 0) return true;
  return board.every((row) => !row.some((cell) => cell === "_"));
}
