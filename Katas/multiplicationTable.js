const multiplicationTable = function (maxValue) {
  var output = "";
  for (i = 1; i <= maxValue; i++) {
    for (d = 1; d <= maxValue; d++) {
      output += d * i;
    }
    if (d < maxValue) {
      output += " ";
    }
    output += "\n";
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
