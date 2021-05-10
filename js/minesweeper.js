function minesweeper(matrix) {
  let newMatrix = [[], [], []];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (i > 0 && j > 0) {
          newMatrix[i - 1][j - 1] = 1;
          newMatrix[i - 1][j] = 1;
          newMatrix[i - 1][j + 1] = 1;
        }
        if (i === 0 && j === 0) {
          newMatrix[i][j - 1] = 1;
          newMatrix[i][j + 1] = 1;
        }
        if (i < matrix[i].length && j < matrix[i].length) {
          newMatrix[i + 1][j - 1] = 1;
          newMatrix[i + 1][j] = 1;
          newMatrix[i + 1][j + 1] = 1;
        }
      }
    }
  }
  console.log(newMatrix);
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);
/*
let array = [[],[]];
array[0] = 1;
array[0][0] = 2;
console.log(array) */
