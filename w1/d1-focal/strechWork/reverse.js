const reverse = function (args) {
  let result = "";
  for (let i = 1; i <= args.length; i++) {
    console.log(args[args.length - i]);
    result += args[args.length - i];
  }
  return result;
};
process.argv.slice(2).forEach((args) => {
  console.log(reverse(args));
});
