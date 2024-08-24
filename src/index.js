
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
    
  let newArr=[];
  matrix.forEach((element,i) => {
      i%2==0 ? newArr.push( ...element): newArr.push(...element.reverse());
  }
  );
  return newArr;
}