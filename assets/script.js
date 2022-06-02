// Variable linked to DOM //
var charRange = document.getElementById('charRange')
var charAmount = document.getElementById('charAmount')
var incSymbols = document.getElementById('includeSymbols')
var charUpper = document.getElementById('includeUppercase')
var incNumbers = document.getElementById('includeNumbers')
var form = document.getElementById('passwordForm')
var passwordDisplay = document.getElementById('passwordDisplay')

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Password legnth and range determined by user//
charAmount.addEventListener('input', matchInput)
charRange.addEventListener('input', matchInput)

// Button click event //

form.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount = charAmount.value
  var includeNumbers = incNumbers.checked
  var includeUppercase = charUpper.checked
  var includeSymbols = incSymbols.checked
  var password = generatePassword(characterAmount,includeNumbers, includeUppercase, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function matchInput(e) {
  var value = e.target.value
  charAmount.value = value
  charRange.value = value
}