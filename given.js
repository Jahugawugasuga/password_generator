// Assignment Code
let generateBtn = document.querySelector("#generate");
let writePassword = 
// character options for lowercase,uppercase,specialcase and numbercase



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
if (event = "click");

}
var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharSet = "!@#$%^&*";
var numberCharSet = "0123456789";
var randomstring = "";
var lowerCase = 0 
var allChars = [trueLower,trueUpper,trueSpecial,trueNumber];
var randomPasswordArray = Array (passLength);
    
    
    // prompt will ask use how many characters in their password
    var passLength = prompt ("how many characters in your password?")
    // if not enough characters entered
    if (passLength < 8){
    alert("You have entered too few characters, refresh the page"); 
    alert("You selected " + passLength + " characters");

}
// // if more than 128 characters are entered
else if (passLength > 128) {
alert("You have entered too many characters, refresh the page");
alert("You selected " + passLength + " characters");
console.log()
}
// if enough characters entered then would you like lowercase?
else {
    lowerCase;
    alert("You selected " + passLength + " characters");
}
   var lowerCase = confirm("Would you like to include lowercase letters?")
   var upperCase = confirm("Would you like to include uppercase letters?")
   var specialCase = confirm("Would you like to include special characters !#@%^>> ?")
   var numberCase = confirm("Would you like to include numbers?")

// if lowerCase is selected, then consolelog, else omit
if (lowerCase){
var trueLower= {lowerCase}
console.log(trueLower)
}
// 
if (upperCase){
var trueUpper = {upperCase}
console.log(trueUpper)
}
if(numberCase){
    var trueNumber = {numberCase}
console.log(trueNumber)
}
if(specialCase){
    var trueSpecial = {specialCase}
console.log(trueSpecial)
}

// build array to contain true statements if selected, if not selected, elements are undefined
var userSelectedCharacters = [trueLower,trueNumber,trueUpper,trueSpecial];

// take the password length and have 30% of it be lowercase letters
if (trueLower ===true) {
    var trueLowerChar = passLength*(.3);
    console.log(trueLowerChar)
}else{

}
// take the password length and have 40% of it be uppercase letters
if (trueUpper){
    var trueUpperChar = passLength;
    console.log(trueUpperChar)
}else{

}
// take the password length and have 20% of it be numbers
if (trueNumber){
    var trueNumberChar = passLength-3;
    console.log(trueNumberChar)
}
// take the password length and have 10% of it be specialcase letters
if (trueSpecial) {
    var trueSpecialChar = passLength-3;
    console.log(trueSpecialChar)
}

 


// Random Character Generator - these should only run if "true"element selected up above
// For lowercase letters

// for (var i=0; i<passLength; i++){
//     var passGenerator = .charAt(Math.floor(Math.random()*(passLength))
//     console.log(typeof passGenerator) 

// function generatePassword()
    
    // this produced a number, not a string

// i need to tie the button into generating the first alert - wait to prompt
// i need to have a text area to display the created password - user innerText 
// I need to have the random number generator generate as many numbers/char/lower/upper letters to fill number of characters requested by user?
// i need the passLength to generate an array of random values ?
// i need the numbers,characters, upper, and lower, to be random distributed in the password?
// i need to target the html that I will be changing with javascript?


