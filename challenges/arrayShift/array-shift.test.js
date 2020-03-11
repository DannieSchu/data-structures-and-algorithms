const { insertShiftArray } = require('./array-shift.js');

describe('validation of shift', () => {

  it('determines whether a value is being added to the middle index of an array', () => {

    const val = 5;

    const arr = [2, 4, 6, 8];

    expect(insertShiftArray(val, arr)).toEqual([2, 4, 5, 6, 8]);
  });
});
