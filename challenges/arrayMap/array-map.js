/* eslint-disable indent */

// initialize new array
let newArr = [];
const map = (arr, func) => {
    // iterate over each item in input array
    for(let i = 0; i < arr.length; i++) {
        // execute function on each index of the old array and store at same index of new array
        newArr[i] = func(arr[i]);
    }
    // return new array
    return newArr;
};


module.exports = { map };
