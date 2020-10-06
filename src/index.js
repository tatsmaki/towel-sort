
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix=matrix.concat(...matrix);
  return matrix.sort(function(a,b) {
      return a-b;
  });
}
