const { add } = require('./date-adder.js');

describe('date adder', () => {
  it('adds a time to the date', () => {
    const date = new Date('1987-08-13T06:15:20.135Z');
    const diff = '10h';

    expect(add(date, diff)).toEqual(new Date ('1987-08-13T16:15:20.135Z'));
  });
});
