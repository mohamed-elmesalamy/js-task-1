
//Create a function to calculate Average to a group of numbers (at least 10 numbers)

function calculateAverage(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    var average = total / numbers.length;
    return average;
  }
  var numberArray = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

console.log("The average is: " + calculateAverage (numberArray));



//Write a function that takes the base and height of a triangle and return its area

function Triangle (base, height) {
    var area = (base * height) / 2;
    return area;
  }

  console.log("The area of the triangle is: " + Triangle (10, 5));



//Create a function that takes the age in years and returns the age in days and print it on console

function AgeInDays(ageInYears) {
    var ageInDays = ageInYears * 365;
    return ageInDays;
  }
  
  console.log("The age in days is: " +  AgeInDays(32));



//Create a function takes two numbers and return their sum Create a function takes two numbers and return their sum

function Numbers(a, b) {
    var sum = a + b;
    return sum;
  }

  console.log("The sum is: " + Numbers (5, 10));



//Create a function that takes an array containing only numbers and return the first element

function firstElement(namesArray) {
    if (namesArray.length > 0) {
      console.log("The first element is : " + namesArray[0]);
    } else{
      console.log("The array is empty") ;
    }
  }
  var names = ["mohamed", "alaa", "lujain", "ahmed"," mona", "tarek", "rawan", "hala"];
firstElement(names);

                               //second function 

function getFirstElement(numbers) {
  if (numbers.length > 0) {
    return numbers[0];
  } else{
  return null;
  }
}
var numberArray = [10, 20, 30, 40, 50];

console.log("The first element is: " +  getFirstElement(numberArray));



//Create a function show your name in HTML document

var myName= ["mohamed"]
document.getElementById("name").innerHTML=" My Name is : "  + myName
console.log(" My Name is : "  + myName)



//Write a function that takes an integer hours and converts it to second .

function convertHoursToSeconds(hours) {
    var seconds = hours * 3600;
    return seconds;
  }
  var hours = 2;

  console.log(hours + " hours is equal  " + convertHoursToSeconds(hours) + " seconds.");



//Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.

function checkSum(num1, num2, num3, num4) {
    var sum = num1 + num2 + num3 + num4;
    
    if (sum > 350) {
      return true;
    } else {
      return false;
    }
  }

  document.getElementById("sum").innerHTML="Sum greater than 350 : "  + checkSum (100, 50, 150, 200)
  console.log("Sum greater than 350: " + checkSum (100, 50, 150, 200));



// عمل فانكشن بتاخد رقم لو بيساوي صفر رجع ترو عكس كدا بيرجع فولس

function checkZero(number) {
    if (number = 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkZero(2));



// عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة (مختلفة)

function getModulo(num1 , num2) {
    var modulo = num1 % num2;
    return modulo;
  }

  console.log("The modulo is: " + getModulo(10 , 3));



// Find the largest of two number
// Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.

function findLargestNumber(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " is greater than " + num2);
    } else if (num2 > num1) {
      console.log(num2 + " is greater than " + num1);
    } else {
      console.log("Both numbers are equal: " + num1);
    }
  }
  var number1 = 5;
  var number2 = 5;
  findLargestNumber(number1, number2);



//Check if input variable is a number or not

function checkIfNumber(input) {
    if (typeof input === 'number') {
      console.log("The input is a number.");
    } else {
      console.log("The input is not a number.");
    }
  }
  var variable1 = 42;
  var variable2 = "Hello";
  
  checkIfNumber(variable1); 
  checkIfNumber(variable2); 



//Write a JavaScript function to get the current date

function getCurrentDate() {
    var currentDate = new Date();
    return currentDate;
  }

  console.log("Current date : " +  getCurrentDate());