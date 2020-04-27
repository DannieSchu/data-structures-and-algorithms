const squaredValues = require('./squaredValues');

describe('squaredValues', () => {
  it('returns true when squared values exist', () => {
    const arr1 = [1, 2, 3, 2, 5];
    const arr2 = [9, 1, 4, 4, 25];

    expect(squaredValues(arr1, arr2)).toBeTruthy();
  });

  it('returns false when squared values do not exist', () => {
    const arr1 = [1, 2, 3, 2, 5];
    const arr2 = [1, 1, 11, 4, 25];

    expect(squaredValues(arr1, arr2)).toBeFalsy();
  });
});
