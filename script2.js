//arrow function


//print odd numbers in an array

var i = 1,num=35;
var count = 0;
while (i<=num) {
  if (i%2!==0) {
    console.log(`${i} is odd number`)
    count++;
  }
  i++;
}
console.log(`There are ${count} odd number`)

//convert all the strings into tittle caps in an string

var numbers = [45, 34, 12, 10, 8, 9],
    sum     = numbers.reduce(function(a, b) { return a + b; }, 0);


//return all the prime numbers in an array

var newArray = [1, 3, 2, 5, 10];
var isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


var myPrimeArray = newArray.filter(isPrime);
console.log(myPrimeArray);

//return all the palindrome in an array

var getAllPalindromes = (words) => {
    return words.filter((word) => {
     word.split("").reverse().join("") === word;
     });
   };
   
   console.log(getAllPalindromes(["hello", "malayalam"]));