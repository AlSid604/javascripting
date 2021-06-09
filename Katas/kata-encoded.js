const urlEncode = function (text) {
  let toTrim = text.trim();
  let result = "";
  for (let i = 0; i < toTrim.length; i++) {
    if (toTrim[i] === " ") {
      result += "%20";
    } else {
      result += toTrim[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
