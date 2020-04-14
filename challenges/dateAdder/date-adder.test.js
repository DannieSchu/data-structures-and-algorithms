const { add } = require('./date-adder.js');

describe('date adder', () => {
  it('adds seconds to the date', () => {
    const date = new Date('1987-08-13T06:15:20.135Z');
    const diff = '25s';

    expect(add(date, diff)).toEqual(new Date ('1987-08-13T06:15:45.135Z'));
  });

  it('adds minutes to the date', () => {
    const date = new Date('1987-08-13T06:15:20.135Z');
    const diff = '55m';

    expect(add(date, diff)).toEqual(new Date ('1987-08-13T07:10:20.135Z'));
  });

  it('adds hours to the date', () => {
    const date = new Date('1987-08-13T06:15:20.135Z');
    const diff = '10h';

    expect(add(date, diff)).toEqual(new Date ('1987-08-13T16:15:20.135Z'));
  });

  it.only('adds days to the date', () => {
    const date = new Date('1987-08-13T06:15:20.135Z');
    const diff = '30d';

    expect(add(date, diff)).toEqual(new Date ('1987-09-12T06:15:20.135Z'));
  });
});
