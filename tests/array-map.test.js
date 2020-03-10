const { map } = require('../challenges/arrayMap/array-map.js');

describe('validation of array iteration', () => {
  it('determines whether function is iterating over each item in the array', () => {
    const func = (num) => {
      return num * 2;
    };  
    const arr = [1, 2, 3, 4];

    expect(map(arr, func)).toEqual([2, 4, 6, 8]);
  });
});

