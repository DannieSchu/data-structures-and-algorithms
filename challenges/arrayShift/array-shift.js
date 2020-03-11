const insertShiftArray = (num, arr) => {
  const index = arr.length / 2;
  for(let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  } 
  arr[index] = num;
  return arr;
};

module.exports = { insertShiftArray };
