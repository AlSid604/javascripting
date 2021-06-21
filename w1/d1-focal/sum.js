const sum = function(n1, n2) {
  let total = Number(n1) + Number(n2);
  console.log(total);
};

const args = process.argv.slice(2);

sum(args[0], args[1]);
