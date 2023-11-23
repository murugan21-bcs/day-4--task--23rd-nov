// print the odd numbers

1.anonymous:

var arr=[0,1,2,3,4,5,6,7,8,9];

var odd = function () {
  let odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()

2.IIFE:

var a=[0,1,2,3,4,5,6,7,8,9];

(function ()  {

  var odd= a.filter(num => num %2 ==1);
return odd;

  })();

//convert all the strings to tittle caps into a string

1.anonymous:

let str = function () {
    var arr = "here is little joe"
    var titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

  2.IIFE:

  (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
    })("i am ravi")

//sum of all numbers in an array

1.anonymous:

var func = function () {
    
    var ar = [1, 2, 3, 4, 5]
    var sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()


  2.IIFE:

  (function () {
    var sum = [1, 2, 3, 4].reduce(add, 5);
    function add(accumulator, a) {
      return accumulator + a;
    }
    console.log(sum);
  })()

  
//return all the prime numbers in an array

1.anonymous:

var prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([2,6,7,11,13,24])); 


  2.IFFE:

  (function (){
    var primeNum = [4,5,8,11,14,17]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })()

//return all the palindrome in an array

1.anonymous:

let isPalindrome = function () {
    var myArray = ['vitamin', 'madam', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()

  2.IIFE:

  ( function () {
    var myArray = ['vitamin', 'madam', 'car', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()

  //return median of two stored array of the same size

  1.anonymous:

     var median = function(a, b) {

    var c = [...a, ...b].sort((a, b) => a - b);
  
    var half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  var arr1 = [2, 13, 16, 26, 4,24];
  var arr2 = [5, 13, 19, 30, 7, 47];
  console.log(median(arr1, arr2));

  2.IIFE:

  ( function() {
    var arr1 = [3,5,9,56,45,42];
    var arr2 = [4,2,6,35,46,65];
    
      var c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      var half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()

    //remove duplicates from an array

    1.anonymous:

    var findDuplicates = function () {
  
        var yourArray = [1,4,6,3,4,7,8,6]
        var duplicates = []
        var tempArray = [...yourArray].sort() 
        for (var i = 0; i < tempArray.length; i++) {
          if (tempArray[i + 1] === tempArray[i]) {
            duplicates.push(tempArray[i])
          }
        }
        console.log(duplicates) 
      }
      findDuplicates()


      2.IIFE:

      (function () {
  
        var numbers = [1,4,6,3,4,7,8,6];
        
        var duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
        
        console.log(duplicates);
      })()

      //rotate an array by k times

      

        
      
    
      
      