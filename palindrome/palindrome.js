var myString = "No 'x'* ins_Nixon?"

function palindrome(string) {
	// set to lowercase
	// remove special characters and spacing
	// set lowercased, special char removed string to reversed string
	// reverse string by splitting to an array, reversing array, then joining back to string
	let lowerCase = string.toLowerCase()
	let newString = lowerCase.replace(/[^a-z]/g, '')
	console.log(newString)
	return newString === newString.split('').reverse().join('')
}

palindrome(myString)


// Playing with ^ regex
// works with \W
// console.log(myString.replace(/[a-z]/g, ''))
// console.log(myString.replace(/[^a-z]/g, ''))
