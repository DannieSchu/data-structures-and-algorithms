/*
CHALLENGE 
date is a Date object.
diff is a string representing the amount of time to add to date
diff is a number followed by an operator
e.g. 10d would add ten days
*/


const add = (date, diff) => {
  // use destructuring somehow to split diff into array of two strings?
  // const [str, operator] = diff; 
  // use regex to split array into two strings?
  // const str = diff.split(/[a-z]/);
  const operator = diff.charAt(diff.length - 1);
  const val = Number(diff.substring(0, diff.length - 1));
  if(operator === 'h') {
    date.setHours(date.getHours() + val);
  }
  return date;
};

module.exports = { add };

