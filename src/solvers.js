/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function (n, startIndex = 0) {
  var solution = undefined;
  // intialize board of size n
  const board = new Board({ n: n });
  // helper function - takes current row, board, and n
  const helper = function (row, board, n, startIndex) {
    //   base case if row >= n //means pieces all   places
    if (row >= n) {
      solution = board.rows();
      console.log(solution);
      //return true;
    }
    if (row !== 0) { //determine starting piece
      startIndex = 0;
    }
    //iterate through current row
    for (let i = startIndex; i < n; i++) {
      //toggle position
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        //if (recursively call helper(row + 1, board, n))
        if (helper(row + 1, board, n)) {
          return true;
        }
      }
      //else (recursion doesnt return true)
      board.togglePiece(row, i);
    }
    return false;
  };
  helper(0, board, n, startIndex);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;
  let index = 0;
  while (index < n) {
    if (findNRooksSolution(n, index) !== undefined) {
      solutionCount++;
    }
    index++;
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
