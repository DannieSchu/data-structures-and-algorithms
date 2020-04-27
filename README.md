# data-structures-and-algorithms

## Table of Contents

### Challenges
* arrayMap
  * Write a function that returns an array with a callback function applied to each item
  * Should not use built-in methods
  * Solution:
      1. initialize new array
      2. use for loop to iterate over each item in input array
      3. execute function on each index of the old array and store at same index of new array
      4. return new array 
* arrayShift
  * Write a function that returns an array with an input number in the middle
  * Should not use built-in methods
  * Solution
    1. calculate middle index
    2. use for loop to iterate over each item in input array
       1. shift all elements back one
       2. decrement i while it is greater than the middle index
       3. when reach middle index, set value equal to input
    3. return array
* dateAdder
  * Write a function that takes in a date object and a diff (a string with the format '10d' representing 10 days) and returns the date plus the diff
  * Solution
    1. separate 'diff' into array containing two strings
    2. turn the value into a number
    3. modify the date conditionally
       1. if(operator === h) {
             date.setHours(date.getHours() + val)
          }
    4. return the date
* dailyRevenue
  * Write a function that takes in an array of timestamps and the price of an object sold and returns an object containing a date string as the key and the daily revenue as the value
  * Solution
    1. Iterate over each item in the timestamps array
    2. Convert item's timestamp property to date string
    3. If there is any revenue for a certain date, add value of price property to it
    4. Otherwise, set accumulator equal to price
* squaredValues
  * Write a function that accepts two arrays and returns 'true' if every value in the first array has its corresponding value squared in the second array.
  * Solution
    1. Return false if the array lengths differ
    2. Initialize objects to store frequency of each value in each array
    3. Iterate over each array and for each value, increment the frequency (or initialize with 1) in the corresponding object
    4. For each key in the first frequency counter:
       1. Confirm that the square of that key exists in the second counter object
       2. Confirm that the frequency of the key's ocurrence in the first counter matches the frequency of the square of the key in the second object
  * Efficiency: O(n) - loops through each array and each counter, but no nested loops


   


