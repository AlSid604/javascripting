const numberOfVowels = function (data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === "u" ||
      data[i] === "o" ||
      data[i] === "i" ||
      data[i] === "e" ||
      data[i] === "a"
    );
    count++;
  }

  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("santa clause"));
