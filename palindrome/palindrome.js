var myString = "No 'x'* in_Nixon?"

function palindrome(string) {
  let lowerCase = string.toLowerCase()
  let newString = lowerCase.replace(/[^a-z]/g, '')
  // console.log(newString)
  return newString === newString.split('').reverse().join('')
}

palindrome(myString)


// Playing with ^ regex
// works with \W
// console.log(myString.replace(/[a-z]/g, ''))
// console.log(myString.replace(/[^a-z]/g, ''))
