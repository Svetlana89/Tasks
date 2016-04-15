//isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

//!Spaces will be ignored but special characters and numbers won't match the string and return false.

//For example:
//isMatching("email box", "b aIl", "Mo x e") return true
///but
//isMatching("bouh", "0b", "uh") return false

//You need to be able to use all the caracters from the two strings so:
//isMatching("kata", "kt", "aaa") return false

function isMatching(string, str1, str2) {
var string1;
string1 = str1+str2;
var getNewString = function(e){
return e.replace(/\s*/g, '').toLowerCase().split('').sort().join('');
}
if(getNewString(string).length===getNewString(string1).length){
return getNewString(string)===getNewString(string1);
} else return false;
}  

//You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

//The function should contain at least 1 argument per set.

//calculate(1)(1) // should return 2
//calculate(1,1)(1) // should return 3
//calculate(1,1)(1,-1) // should return 2
//calculate(2,4)(3,7,1) // should return 17

function calculate() {
var i, sum=0;
for(i=0; i<arguments.length; i++) {
sum+= arguments[i];
}
return function () {
var j, sum1 = 0;
for(j=0; j<arguments.length; j++) {
sum1+= arguments[j];
}
return sum+sum1;
}
}

//Create a function that calculates the sum of the two lowest numbers given an array of 5 positive integers. No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {  
var summ = 0;
  numbers = numbers.sort(function(a,b){return a-b;});
summ = numbers[0]+numbers[1];
return summ;
};

//Create a find function that takes a string and an array. If the string is in the array, return true.

var find = function(string, array) {
var i;  
for(i=0; i<array.length; i++) {
if(string == array[i]) {
return true;
} else continue;
}return false;
}

//Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//For example an array [2, 3, 9] equals 239, add one would return an array [2, 4, 0].

//[4, 3, 2, 5] would return [4, 3, 2, 6]

//The array can't be empty and only positive, single digit integers are allowed. The function should return null if the array is empty or any of the array values are negative or more than 10.

//[1, -9] would return null/nil/None (according to the language implemented).

function upArray(arr){
var str, len, i;
len = arr.length-1;
if(len>0 && arr[len]>-1 && arr[len]<10){
arr[len] = arr[len]+1;
for(var i = len; i>-1; i--){
if(arr[i]>-1 && arr[i]<11){
if(arr[i]===10){
arr[i]=0;
if(arr[i-1]){
arr[i-1] = arr[i-1]+1;
} else arr.unshift(1);
} else continue;
} else return null;
} return arr;
} else return null;
}

//The function is incomplete and it's your job to complete it so it would add the given values.

function add(a, b){
 return a+b;
}

//"Any word or phrase that exactly reproduces the letters in another order is an anagram." (Wikipedia). Add numbers to this definition to be more interest.

//Examples of anagrams:

//William Shakespeare = I am a weakish speller
//silent = listen
//12345 = 54321
//The challenge is to write the function isAnagram to return True if the word test is an anagram of the word original and False if not.

//Note: Anagrams are case insensitive, ignore all non-alphanumeric characters, input will always be two strings. Also: two identical words may be considered to be an edge case of an anagram, but for this kata they are still correct anagrams.

function isAnagram(test, original){
var normalize = function(e){
    return e.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  };
  return normalize(test) === normalize(original);
}

//You know Array.isArray was already implement in ECMAScript 5.1 (ECMA-262). So this will be the polyfill.

//Use Array.isArray to define method.

//For example:

//Array.isArray( [1,2,3] );  // true
//Array.isArray( new Array() ); // true

//Array.isArray( undefined ); // false
//Array.isArray(17); // false

Array.isArray = function(value) {
  return toString.apply(value) == '[object Array]';
};

//Hello! Today your task is to build a basic die feature, where you will get a range in the form (min, max) - both included - and return a random number in the inclusive range.

//Props if you don't use your language's random library!

//dice(2, 7); // returns a value that can be 2, 3, 4, 5, 6, 7

function dice(minimum, maximum){
  return Math.round(Math.random()*(maximum - minimum))+minimum;
}

//You own a great car website that helps people make decisions about buying the best new car for them. You decide that if you had a calculator on the website which lets people know their car's value after depreciation in a couple of years, would be a great idea!

//Write a function that takes the car's value when new (p) and return its value to 2 decimal places in the nth year (n).

//Yearly depreciation: Year 1 = 20% Year 2 = 20% Year 3+ = 10% per year (ie. after 3 years the cars value depreciates 10% every year)

function isNumeric(a) {
  return !isNaN(parseFloat(a)) && isFinite(a)
}
function car(p,n){
   var summ = 0;
   if(isNumeric(p) && isNumeric(n) && n>0 && p>0) {
      (n<3)?summ = p*Math.pow(0.8,n):summ = (p*Math.pow(0.8,2))*Math.pow(0.9,n-2);
      return summ.toFixed(2);
    } else return false;
}

//Write a solution to cleanup arrays. This can exisit entirely in the squeakyClean function or contain multiple helper functions.

//Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

//Example:

//var originalArray = ['click1','click2',null,'','','submitForm'];
//the solution you write should return this:

//var cleanedArray = ['click1', 'click2','submitForm']

function squeakyClean(arr) {
 var arr1 = arr.filter(function(x){return x!=false && x!=null && x!==undefined//или просто return !!x;})
return arr1;
}

//Our fruit guy has a bag of fruits (array of strings) where some fruits are rotten, he wants to replace all the rotten fruits by good ones. For example, given this array ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that will take as an argument an array of strings containing fruits and should return an array of strings where all the rotten fruits are replaced by good ones.

//Note: If the array is null or empty you should return empty array ([]). The rotten fruit name will be in this format rottenFruitname where is the 1st letter of the fruit name is uppercase. NB: The returned array should be in LOWER case.

function removeRotten(bagOfFruits){
if(toString.apply(bagOfFruits)==='[object Array]' && bagOfFruits!==null){
return bagOfFruits.map(function(x){
return x.replace(/rotten/ig,"").toLowerCase() || x;
});
} else return [];
}

//Given two numbers x and n, calculate the nth root of x.

//This means that being r = result, r^n = x; Examples

//root(4, 2);   // 2 (the square root of 4 is 2 , 2^2 = 4);
//root(8, 3);   // 2 (the cube root of 8 is 2   , 2^3 = 8);
//root(256, 4); // 4 (the 4th root of 256 is 4  , 4^4 = 256);
//root(9, 2);   // 3 (the square root of 9 is 3 , 3^2 = 9)
//Expect inputs greater than 1 10^19

//Good luck!

function root(x, n) {
return Math.pow(x,1/n);
}

//In Your class You have started lessons about Arithmetic Progression. Because You are also a programmer, You have decided to write a function arithmetic_sequence_sum(a, r, n), that will print SUM of the first n elementh of the sequence with the given constant r and first elementh a

//For example arithmetic_sequence_sum(2, 3, 5)

//Should return: 40

//More info: https://en.wikipedia.org/wiki/Arithmetic_progression

function ArithmeticSequenceSum(a, r, n) {
var i, summ=0;  
for(i=1;i<=n;i++) {
summ+=a;
a+=r;
}return summ;
}

//You have an array of numbers 1 through 10 (JS: 1 through 10 or less). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

//Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

//Between each number should be a space and after the final number (1) should be the word 'liftoff!'

function liftoff(instructions){
  return instructions.sort(function(a,b){return a-b;}).reverse().join(" ")+" liftoff!";
}

//Given an integer as input, can you round it to the next 5?

function roundToNext5(n){
  if (n % 5 === 0) {
    return n;
  } else {
    while (n % 5 !== 0) {
      n++;
    }
  }
  return n;
}

//Calculate the sum of all the arguments passed to a function.

//Note: If any of the arguments is not a finite number the function should return false/False instead of the sum of the arguments.

function sum(){
var total = 0;
var i, total=0;
for(i=0; i<arguments.length; i++) {
if (typeof arguments[i]!="number") {
total = false; break;
} else {
total+=arguments[i];
}
}
return total;
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

function XO(str) {
   var summO = 0, summX = 0,
   str = str.toLowerCase(),
   xoArr = str.match(/[xo]/g);
   if(xoArr==null) return true;
   for(var i=0; i<xoArr.length; i++){
     if(xoArr[i]==="x"){
     summO+=1;
     } else if(xoArr[i]==="o") {
          summX+=1;  
        }
   };
    if(summO===summX) return true;
    else return false;
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}