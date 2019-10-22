/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * What's the Deal with Functions - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";



/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');


/* Variable to store DOM elements 
   You'll use these variables in your code below */
const element1 = document.querySelectorAll('.item')[0];
const element2 = document.querySelectorAll('.item')[1];
const element3 = document.querySelectorAll('.item')[2];
const element4 = document.querySelectorAll('.item')[3];


// Helpful log statements
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);


/* Variables to use as `arguments` when invoking your functions
   You'll use these variables for the arguments that you pass into your functions when you call them in the event listeners below */
const value1 = 42;
const value2 = 'Treehouse Rocks!';
const value3 = btn3.tagName;
const value4 = [value1, value2, value3]


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function to set the content of the first element — the function should have a single parameter called `number`
  // 1a. Set the `element1` variable's `style.color` property equal to green, or your favorite color
  // 1b. Set the `innerHTML` of `element1` variable equal to the `number` parameter
const firstElement = (number) => {
  element1.style.color = 'hotpink';
  element1.innerHTML = number;
}

// 2. Create a function to set the content of the second element — the function should have a single parameter called `string`
  // 2a. Set the `element2` variable's `style.color` property equal to green, or your favorite color
  // 2b. Set the `innerHTML` of `element2` variable equal to the `string` parameter
const secondElement = (string) => {
  element2.style.color = 'purple';
  element2.innerHTML = string;
}

// 3. Create a function to set the content of the third element — the function should have a single parameter called `element`
  // 3a. Set the `element3` variable's `style.color` property equal to green, or your favorite color
  // 3b. Set the `innerHTML` of `element3` variable equal to the `element` parameter
  const thirdElement = (element) => {
    element3.style.color = 'purple';
    element3.innerHTML = element;
  }

// 4. Create a function to set the content of the fourth element — the function should have a single parameter called `array`
  // 4a. Set the `element4` variable's `style.color` property equal to green, or your favorite color
  // 4b. Create a variable to store what will be printed and set it equal to an empty string, `''`
  // 4c. Loop over the `array` parameter
    // 4cc. Concatenate `array[i]` to the printed variable created above for each iteration 
  // 4d. Set the `innerHTML` of `element4` variable equal to the printed variable created above

  const fourthElement = (array) => {
    element4.style.color = 'purple';
    let printedResult = " ";
    for (let i = 0; i < array.length; i += 1) {
      printedResult = printedResult.concat(array[i]);
      element4.innerHTML = array[i];
    }  
  };
    

// 5. Call each function you've created in the associated event listeners below, using the `value` variables above as the argument


// 6. Try playing around with the arguments that you pass into each function that you call in the event listener callbacks below.  Experiment to get a better idea of how function parameters/arguments work.


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

 
/* btn1 listener */
btn1.addEventListener('click', () => {

  // Invoke the function to set the first element
  firstElement(value1);

  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  // Invoke the function to set the second element 
  secondElement(value2);
  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  // Invoke the function to set the third element 
  thirdElement(value3);
  // Helpful log statement to test function
  console.log('Third button is functional!');
});


/* btn4 listener */
btn4.addEventListener('click', () => {

  // Invoke the function to set the fourth element  
  fourthElement(value4);
  // Helpful log statement to test function
  console.log('Fourth button is functional!');
});