/*
### 1. Reverse


Write a method that will take a string as input, and return a new string with the same letters in reverse order.
*/

function reverse(string) {
  var newStr = [];
  for(var i = string.length - 1; i >= 0; i--) {
    newStr.push(string[i]);
  }
  return newStr.join("");
}

reverse('abcd');

------------------------------------------------------------------------

/*
### 2. Factorial

Write a method that takes an integer `n` in; it should return
`n*(n-1)*(n-2)*...*2*1`. Assume n >= 0.

As a special case, `factorial(0) == 1`.
*/

function factorial(n) {
  var total = n;
  for(var i = 1; i < n; i++) {
    total *= (n - i);
  }
  return total;
}

factorial(4) // 24

------------------------------------------------------------------------

/*
### 3. Longest Word

Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces. You may use the String `split` method to aid you in your quest.
*/


function longest_word(sentence) {
  var arr = sentence.split(" ");
  arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return arr[0];
}

longest_word('This is an amazing test') // 'amazing'

------------------------------------------------------------------------

/*
### 4. Sum Nums

Write a method that takes in an integer `num` and returns the sum of all integers between zero and num, up to and including `num`.
*/


function sum_nums(num) {
  var total = 0;
  for(var i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

sum_nums(6); // 21

------------------------------------------------------------------------

/*
### 5. Time Conversion

Write a method that will take in a number of minutes, and returns a string that formats the number into `hours:minutes`.
*/


function time_conversion(minutes) {
  var hour = 60;
  var mins = minutes % hour;
  return ((minutes -  mins) / hour) + ":" + mins;
}

time_conversion(155); // '2:35'

------------------------------------------------------------------------

/*
### 6. Count Vowels

Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased. You can treat "y" as a consonant.
*/


function count_vowels(string) {
  var vowels = /[aeiou]/g;
  return string.match(vowels)/length;
}

count_vowels('alphabet');

------------------------------------------------------------------------

/*
### 7. Palindrome

Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward. Assume that there are no spaces; only lowercase letters will be given.
*/

function palindrome(string) {
  var newStr = string.split("").reverse().join("");
  if(string !== newStr) {
    return false;
  } else {
    return true;
  }
}

palindrome('abcd'); // false

palindrome('abbba'); // true

------------------------------------------------------------------------

/*
### 8. Most Letters

Write a method that takes a string in and returns true if the letter "z" appears within three letters **after** an "a". You may assume that the string contains only lowercase letters.
*/

function nearby_az(string) {
  var indexA = string.indexOf("a");
  var indexZ = string.indexOf("z");
  if(indexA < indexZ && (indexZ - indexA) <= 3) {
    return true;
  } else {
    return false;
  }
}

nearby_az('abbbz'); // false

nearby_az('abz'); // true

------------------------------------------------------------------------


### 9. Two Sum

Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return `null`.

function two_sum(nums) {
  var sortedArr = nums.sort(function(a, b) {
    return a - b;
  });
  var lowestNum = sortedArr[0];
  var highestNum = sortedArr[sortedArr.length - 1];
  while(lowestNum < hightNum) {
    if(sortedArr[lowestNum] + sortedArr[highestNum] === 0) {
      return "We did it!";
    } else if(sortedArr[lowestNum] + sortedArr[highestNum] < 0) {
      lowestNum++;
    } else if(sortedArr[lowestNum] + sortedArr[highestNum] > 0) {
      highestNum--;
    } else {
      return null;
    }
  }
}

function two_sums(nums) {
  var target = 0;
  var arr = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(nums[i] + nums[j] === target) {
        arr[0] = i;
        arr[1] = j;
        return arr;
      }
    }
  }
}

function two_sum(nums) {
  var colOne = [];
  var colTwo = [];
  for(var i = 0; i < nums.length - 1; i++) {
    for(var j = 1; j < nums.length; j++) {
      colOne.push(nums[i]);
      colTwo.push(nums[j]);
      return Number(nums[i]) + Number(nums[j]);
    }
    if(colOne - colTwo === 0) {
      return true;
    } else {
      return null;
    }
  }
}

function two_sum(nums) {
  // var colOne = [];
  // var colTwo = [];
  var twoNums = 0;
  for(var i = 0; i < nums.length - 1; i++) {
    for(var j = 1; j < nums.length; j++) {
      // colOne.push(nums[i]);
      // colTwo.push(nums[j]);
      twoNums = Number(nums[i]) + Number(nums[j]);
    }
    if(twoNums === 0) {
      return true;
    } else {
      return null;
    }
  }
}

function two_sum(nums) {
  var colOne = [];
  var colTwo = [];
  for(var i = 0; i < nums.length - 1; i++) {
    for(var j = 1; j < nums.length; j++) {
      colOne.push(nums[i]);
      colTwo.push(nums[j]);
    }
    if(colOne - colTwo === 0) {
      return true;
    } else {
      return null;
    }
  }
}

function two_sum(nums) {
  var target = 0;
  var sums = [];
  var hashTable = {};
  for(var i = 0; i < nums.length; i++) {
    var targetMinusElement = target - arr[i];
    if(hashTable[targetMinusElement.toString()] !== undefined) {
      sums.push([arr[i], targetMinusElement]);
    }
    hashTable[arr[i].toString()] = arr[i];
  }
  return hashTable["arr[i].toString()", "arr[i].toString()"];
}

function two_sum(nums) {
  var target = 0;
  var firstNum = [];
  var secNum = [];
  for(var i = 0; i < nums.length; i++) {
    for(var j = 1; j < nums.length; j++) {
      firstNum.push(nums[i]);
      secNum.push(nums[j]);
    }
    if(nums[i] +  nums[j] === target) {
      return "Woohoo";
    } else {
      return "Try again!";
    }
  }
}

// two_sum function will return all pairs in the array that = 0

function two-sum(nums) {
  // pair of numbers sums to zero
  var target = 0;
  // empty array
  var sums = [];
  // hashTable??
  var hashTable = {};

  // for loop to check each element in the array
  for(var i = 0; i < nums.length; i++) {
    // target - element - and then check number is in the hashTable see below
    var sumMinusElement = function() {
      (target - nums[i]).toString();
    }
    if(hashTable[sumMinusElement] !== undefined) {
      sums.push([arr[i]], sumMinusElement)
    }
    // check if number is in hashTable - if number is there than we have a found a pair
    if(hashTable)
  }
}

two_sum([1, 3, -1, 5]); // [[0, 2]]

two_sum([1, 3, -1, 5, -3]); // [[0, 2], [1, 4]]

two_sum([1, 5, 3, -4]); // null

------------------------------------------------------------------------

/*
### 10. Is Power of Two

Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
*/

function is_power_of_two(num) {
  var numHolder = num;
  for(var i = 0; i < num; i++) {
    num /= 2;
  }
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

is_power_of_two(8); // true

is_power_of_two(24); // false



/*
### 11. Repeat a string

Repeat a given string (first argument) `num` times (second argument). Return an empty string if `num` is not a positive number.
*/

function repeat_string_num_times(str, num) {
  var string = "";
  for(var i = 1; i <= num; i++) {
    string += str;
  }
  return string;
}

repeat_string_num_times("abc", 3); // abcabcabc

repeat_string_num_times("abc", -1); // ""


/*
### 12. Sum All Numbers in a Range

Write a function that receives an array of two numbers as argument and  returns the sum of those two numbers and all numbers between them.
*/

function add_all(arr) {
  var sum = 0;
  for(var i = arr[0]; i <= arr[1]; i++) {
    sum += i
  }
}

add_all([1, 4]); // 10

add_all([5, 10]); // 45



/*
### 13. True or False

Write a function that checks if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/


function is_it_true(args) {
  if(typeof(args) !== "boolean") {
    return false;
  } else {
    return true;
  }
}


is_it_true(true); // true

is_it_true(false); // true

is_it_true("true"); // false

is_it_true(1); // false

is_it_true("false"); // false


/*
### 14. Return Largest Numbers in Arrays

 Write a function that receives an array with four nested array. The function returns an array consisting of the largest number from each provided sub-array.
 */

function largest_of_four(arr) {
  var bigNum = [];
  for(var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
    bigNum.push arr[i][0];
  }
  return bigNum;
}


largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27,5,39,1001]



/*
### 15. Does it starts with Java?

Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
*/

function starts_with_java(str) {
  if(str.startsWith("Java")) {
    return true;
  } else {
    return false;
  }
}

starts_with_java("JavaScript"); // true

starts_with_java("Java"); // true

starts_with_java("Python"); // false
