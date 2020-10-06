
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array= matrix.concat(...matrix);
  return array.sort((a,b) => {
      return a-b;
  });
}
