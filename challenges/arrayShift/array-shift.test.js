const { insertShiftArray } = require('./array-shift.js');

describe('validation of shift', () => {

  it('determines whether a value is being added to the middle index of an array', () => {

    const val = 5;

    const arr = [2, 4, 6, 8];

    expect(insertShiftArray(val, arr)).toEqual([2, 4, 5, 6, 8]);
  });

  it('determines whether a value is being added to the middle index of a larger array', () => {

    const val = 10;

    const arr = [2, 4, 6, 8, 10, 12];

    expect(insertShiftArray(val, arr)).toEqual([2, 4, 6, 10,  8, 10, 12]);
  });
});
