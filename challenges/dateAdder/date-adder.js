module.exports = (date, diff) => {
  const operator = diff.charAt(diff.length - 1);
  const val = Number(diff.substring(0, diff.length - 1));

  if(operator === 's') date.setSeconds(date.getSeconds() + val);
  else if(operator === 'm') date.setMinutes(date.getMinutes() + val);
  else if(operator === 'h') date.setHours(date.getHours() + val);
  else if(operator === 'd') date.setDate(date.getDate() + val);
  else if(operator === 'w') date.setDate(date.getDate() + (7 * val));
  else if(operator === 'M') date.setMonth(date.getMonth() + val);
  else if(operator === 'y') date.setFullYear(date.getFullYear() + val);
  else {
    return 'Please enter a valid operator.';
  }
  return date;
};
