// Assignment code here
var symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var choiceArr = [];

  var inputLength = parseInt(prompt("What is the length of the password?"));

  // Validation to check if answer is >=8 or <=128
  if (inputLength < 8 || inputLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return "";  // return empty string
  }

  var uppercaseLetters = confirm("Do you want to include uppercase?");
  var lowercaseLetters = confirm("Do you want to include lowercase?");
  var numbers = confirm("Do you want to include numbers?");
  var symbols = confirm("Do you want to include special characters?");

  // Checking at least one character type is selected
  if (!uppercaseLetters && !lowercaseLetters && !numbers && !symbols) {
    alert("You must select at least one character type");
    return "";  // return empty string
  }

  if (uppercaseLetters) choiceArr = choiceArr.concat(uppercaseArr);
  if (lowercaseLetters) choiceArr = choiceArr.concat(lowercaseArr);
  if (numbers) choiceArr = choiceArr.concat(numbersArr);
  if (symbols) choiceArr = choiceArr.concat(symbolArr);

  // Generation of password
  var newPassword = "";
  for (let i = 0; i < inputLength; i++) {
    newPassword += choiceArr[Math.floor(Math.random() * choiceArr.length)];
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);