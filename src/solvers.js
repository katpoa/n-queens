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

window.findNRooksSolution = function (n) {
  var solution = undefined;
  // intialize board of size n
  const board = new Board({ n: n });
  // helper function - takes current row, board, and n
  const helper = function (row, board, n) {
    //   base case if row >= n //means pieces all   places
    if (row >= n) {
      solution = board.rows();
      return true;
    }
    //iterate through current row
    for (let i = 0; i < n; i++) {
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
  helper(0, board, n);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  const board = new Board({ n: n });
  var solutionCount = 0;
  const helper = function (row, board, n) {
    if (row >= n) {
      solutionCount++;
      return;
    } else {
      //iterate through current row
      for (let i = 0; i < n; i++) {
        //toggle position
        board.togglePiece(row, i);
        if (!board.hasAnyRooksConflicts()) {
          //if (recursively call helper(row + 1, board, n))
          helper(row + 1, board, n);
        }
        //else (recursion doesnt return true)
        board.togglePiece(row, i);
      }
    }
    return;
  };
  helper(0, board, n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var makeEmptyMatrix = function (n) {
    return _(_.range(n)).map(function () {
      return _(_.range(n)).map(function () {
        return 0;
      });
    });
  };
  var solution = makeEmptyMatrix(n);
  // intialize board of size n
  const board = new Board({ n: n });
  // helper function - takes current row, board, and n
  const helper = function (row, board, n) {
    //   base case if row >= n //means pieces all   places
    if (row >= n) {
      solution = board.rows();
      return true;
    }
    //iterate through current row
    for (let i = 0; i < n; i++) {
      //toggle position
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
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
  helper(0, board, n);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  const board = new Board({ n: n });
  var solutionCount = 0;
  const helper = function (row, board, n) {
    if (row >= n) {
      solutionCount++;
      return;
    } else {
      //iterate through current row
      for (let i = 0; i < n; i++) {
        //toggle position
        board.togglePiece(row, i);
        if (!board.hasAnyQueenConflictsOn(row, i)) {
          //if (recursively call helper(row + 1, board, n))
          helper(row + 1, board, n);
        }
        //else (recursion doesnt return true)
        board.togglePiece(row, i);
      }
    }
    return;
  };
  helper(0, board, n);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
