const { gets, print } = require("./auxiliar-functions");

const studentQuantity = gets();
let largestValueFound = 0;

for (let i = 0; i < studentQuantity; i++) {
  const luckNumber = gets();
  if (luckNumber > largestValueFound) {
    largestValueFound = luckNumber;
  }
}

print(largestValueFound);
