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
   


