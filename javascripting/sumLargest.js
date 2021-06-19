var arr = [10, 4, 34, 6, 92, 2];
var largest = 0;
var secondLargest = 0;
var sum;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

sum = largest + secondLargest;

console.log("sum ", sum);
