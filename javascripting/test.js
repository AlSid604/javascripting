const merge = function (arrays) {
  var mergedArray = [];
  for (i = 0; i < arrays.length; i++) {
    return (mergedArray += arrays[i]);
  }
  return mergedArray;
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);

const arrays = [
