module.exports = (date, diff) => {
  const newDate = new Date(date);
  const operator = diff.charAt(diff.length - 1);
  const val = Number(diff.substring(0, diff.length - 1));

  if(operator === 's') newDate.setSeconds(date.getSeconds() + val);
  else if(operator === 'm') newDate.setMinutes(date.getMinutes() + val);
  else if(operator === 'h') newDate.setHours(date.getHours() + val);
  else if(operator === 'd') newDate.setDate(date.getDate() + val);
  else if(operator === 'w') newDate.setDate(date.getDate() + (7 * val));
  else if(operator === 'M') newDate.setMonth(date.getMonth() + val);
  else if(operator === 'y') newDate.setFullYear(date.getFullYear() + val);
  else {
    throw new Error('Please enter a valid operator.');
  }
  return newDate;
};
