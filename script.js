var Characters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = [];
var possibleCharacters = [];
var length;

function generatePassword () {
  var length = parseInt(prompt("How many characters would you like? You can choose between 8 and 128."));

  if(!length) {
    alert ("A number is required");
  } else if (length < 8) {
    alert ("The length must be at least 8 characters");
  } else if (length > 128) {
    alert ("The length cannot be more that 128 characters"); 
  } else {
    specialChar = confirm("Click OK if you would like special characters in your password");
    numberChar = confirm ("Click OK if you would like numbers in your password.");
    lowerChar = confirm ("Click OK if you would like lower case characters in your password.");
    upperChar = confirm ("Click OK if you would like upper case characters in your password.");
  }

  if (specialChar) {
    possibleCharacters = possibleCharacters.concat(Characters);
  }

  if (numberChar) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  if (lowerChar) {
    possibleCharacters = possibleCharacters.concat(lowerCased);
  }

  if (upperChar) {
    possibleCharacters = possibleCharacters.concat(upperCased);
  }

  for (var i=0; i < length; i++) {
    var index = Math.floor(Math.random() * possibleCharacters.length)
    var computerChoice = possibleCharacters[index]; 

    password.push(computerChoice);
  }
 return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
