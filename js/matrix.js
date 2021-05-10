function logEachMatrixItem(matrix) {
  console.log('\nLog each matrix item:');
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(` item {${i}, ${j}} = ${matrix[i][j]}`);
    }
  }
}
function showMatrix(matrix) {
  matrix.forEach(element => {
    console.log(element.join(', '));
  });
}
function showSumByRow(matrix) {
  let sumResult = [];
  let sum;
  matrix.forEach(element => {
    sum = 0;
    for (let i = 0; i < element.length; i++) {
      sum += element[i];
    }
    sumResult.push(sum);
  });
  console.log(sumResult)
}
function showSumByRowForEach(matrix) {
  let sumResult = [];
  let sum;
  matrix.forEach(element => {
    sum = 0;
    element.forEach(item => {
      sum += item;
    })
    sumResult.push(sum);
  });
  console.log(sumResult)
}
function snakeBypass(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIndex = i % 2 === 0
        ? j
        : (matrix[i].length - j - 1);
      console.log(matrix[i][columnIndex]);
    }
  }
}
function logMainDiag(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}
function logSideDiag(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - i - 1]);
  }
}
function showBottomMainTriangle(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let log = [];
    for (let j = 0; j < matrix.length; j++) {
      if (j <= i) log.push(matrix[i][j]);
    }
    console.log(log);
  }
}

let matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 0, 1],
  [2, 3, 4, 5],
]
//logEachMatrixItem(matrix);
//showMatrix(matrix);
//showSumByRow(matrix);
//showSumByRowForEach(matrix);
//snakeBypass(matrix);
//logMainDiag(matrix);
//logSideDiag(matrix);
//showBottomMainTriangle(matrix);