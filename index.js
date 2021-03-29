//  Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
  const arr = []
  return arr.concat(...args)
}

console.log(concat([1, 2, 3], [4,5], [6,7], [8,9]));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	return num * (num + 1)/2
}

console.log(addUp(13))

// Alternative
function sumRange(num){
	if(num === 1) return 1;

	return num + sumRange(num - 1);
}

console.log(sumRange(13))


// Create an algorithm that prints the integers from 17 to 53. However for multiples of two print "Foo" instead of thenumber and for the multiples of five print "Bar". For numbers which are multiples of both two and five print "FooBar".

function fooBar() {

	for(let i=17; i<=53; i++) {

		if(i % 2 === 10 ) {
			console.log('FooBar')
		} else if (i % 2 === 0) {
			console.log('Foo')
		} else if (i % 5 === 0) {
			console.log("Bar")
		} else console.log(i)

	}

}

fooBar();



// Find the longest word in a string
function findLongestWordLength(str) {
  let arr = str.split(' ')
//   console.log(arr)
//   let longestWord = ''
//   for(let word of arr) {
// 	  if (word.length > longestWord.length) {
// 		  longestWord = word
// 	  }
//   }

const longestWord = arr.reduce((current, longest) => {
	// if(current.length > longer.length) {
	// 	return current
	// } else {
	// 	return longer
	// }

	return current.length > longest.length ? current : longest
}, ' ')

  return longestWord;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))



let x = {
	a:1,
	b:2
}

// Get the keys


const arrKeys = Object.keys(x);
console.log(arrKeys)

// Get the values in an arr
const arrValues = Object.values(x);
console.log(arrValues)


// Turn the obj in to an arr
const arrOfArr = Object.entries(x)
console.log(arrOfArr)
// console.clear()

// const obj = {
// 	a:1,
// 	b:2,
// 	getA() {
// 		console.log(this.a)
// 		return this
// 	},
// 	getB() {
// 		console.log(this.b)
// 	}

// }

// obj.getA() obj.getB()