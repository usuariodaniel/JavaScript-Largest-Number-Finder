const enter = [5, 50, 10, 23, 72, 100];
let i = 0;

function gets() {
  const value = enter[i];
  i++;
  return value;
}

function print(text) {
  console.log(text);
}

module.exports = { gets, print };
