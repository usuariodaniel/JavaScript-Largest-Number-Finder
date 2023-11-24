# JavaScript Largest Number Finder

This project is a simple JavaScript module that exports two functions: 'gets' and 'print'. The 'gets' function retrieves and returns the value at the 'i' index in the 'enter' array, and the 'print' function logs a given text to the console and takes a series of numbers as input and outputs the largest number.

## Installation

To run this program, you'll need to have Node.js installed on your computer. Then, you can clone this repository and run the program with the following commands:

```
## Contribution Guidelines

1. Fork the repository.
2. Create a new branch: `git checkout -b your-branch-name`.
3. Make your changes and commit them: `git commit -m 'Your detailed commit message'`.
4. Push to the branch: `git push origin your-branch-name`.
5. Open a pull request.
```

## Usage

To use this program, you'll need to provide a series of numbers as input. The program will then output the largest number.

# How it Works

1. The code begins by importing two functions, `gets` and print, from a module named `auxiliar-functions`. These functions are likely defined in the `auxiliar-functions.js` file in the same directory. The `gets` function is used to get user input, and the `print` function is used to display output.

```javascript
const { gets, print } = require("./funcoes-auxiliares");
```

2. The `studentQuantity` variable is assigned the value returned by the `gets` function. This value is likely the number of students, and each student is associated with a "luck number".

```javascript
const studentQuantity = gets();
```

3. A variable `largestValueFound` is initialized with a value of 0. This variable will be used to keep track of the largest "luck number" found so far.

```javascript
let largestValueFound = 0;
```

4. The code then enters a `for` loop that iterates `studentQuantity` times. In each iteration, it gets a "luck number" for a student using the `gets` function and assigns it to the `luckNumber` variable.

```javascript
for (let i = 0; i < studentQuantity; i++) {
 const luckNumber = gets();
```

5. Inside the loop, there's an `if` statement that checks if the current `luckNumber` is greater than `largestValueFound`. If it is, `largestValueFound` is updated to the current `luckNumber`.

```javascript
if (luckNumber > largestValueFound) {
  largestValueFound = luckNumber;
}
```

6. After the loop has finished executing, the `print` function is called with `largestValueFound` as its argument. This will print the largest "luck number" found among all students.

```javascript
print(largestValueFound);
```

In summary, this code is a simple implementation of an algorithm to find the maximum value in a list of numbers. It uses a for loop to iterate over the list and keeps track of the maximum value found so far.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
