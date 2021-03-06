//Return the first index of an array in which the sum of the intergers on the left and right sice are equal.
function findEvenIndex(arr){
	var leftSum = 0
	var rightSum = 0
	if (arr.length == 0){
			console.log("Empty Array")
			return 0
	}
	for (var i=0; i<arr.length; i++){
		leftSum = leftSum + arr[i]
		rightSum = 0
		for (var l=arr.length-1; l>i; l--){
			rightSum = rightSum + arr[l]
			if (rightSum == leftSum && l == i+2){
				return l-1
			}
		}
	}
	return -1
}

findEvenIndex([1,2,3,4,3,2,1])//returns index 3
findEvenIndex([1,100,50,-51,1,1])//returns index 1

//Takes any non-negative integer and returns new interger with digits in descending order.
function highToLow(num){ 
	var arr = Array.from(num.toString()).map(Number);
	var max=0
	var newArr = []
	var len = arr.length
	while (newArr.length<len){
		for (var i=0; i<arr.length; i++){	
			if (max<arr[i]){
				max = arr[i]	
			}
		}
		newArr.push(max)
		var inx = arr.indexOf(max)
		arr.splice(inx, 1)
		max = arr[0]
	}
	var newNum = newArr.join("")
	return parseInt(newNum)
}
// console.log(highToLow(2501)) //returns 5210

//Given a string of space separated numbers, return the highest and lowest number.
function highAndLow(num){
	var arr = num.split(" ")
	var max = arr[0]
	var min = arr[0]
	for (var i=0; i<arr.length; i++){
		arr[i] = parseInt(arr[i])
		if (max < arr[i]){
			max = arr[i]
		}
		if (min > arr[i]){
			min = arr[i]
		}
	}
	return `${max} ${min}`
}
highAndLow("1 -1")

//Build split method that can split string into an array on spaces.
function stringArray(string){
	var word_arr = []
	var word = ''
	for (var i=0; i<string.length; i++){
		if (string[i]!= " "){
			word += string[i]	
		}
		else {
			word_arr.push(word)
			word = ''
		}
	}
	word_arr.push(word)
	return word_arr
}

console.log(stringArray("Coding is fun"))

//Given a string reverse the order of words.
function reverseWords(string){
	return string.split(" ").reverse().join(" ")
} 

reverseWords("Patsy says hello")//returns "hello says Patsy"

//Given a string find and return longest word
function longestWord(string){
	var word_arr = string.split(" ")
	var longest = 0
	word = ''
	for (var i=0; i<word_arr.length; i++){
		if(longest <word_arr[i].length){
			longest = word_arr[i].length
			word = word_arr[i]
		}
	}
	return word
}

longestWord("Cat dog whatever")//returns whatever

//Return the sum of a sequence of integers.  
//The sequence is defined by 3 non-negative values: begin, end, step.
//If begin value is greater than the end, function should returns 0.
const sequenceSum = (begin, end, step) => {
if (begin > end){
  return 0
}
  var sum = begin
  while (begin+step <= end){
    begin += step
    sum += begin
  }
  return sum
};

//Given two array return common numbers.
console.log(overLap([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
