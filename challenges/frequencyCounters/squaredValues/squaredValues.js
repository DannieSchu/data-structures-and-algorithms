module.exports = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  
  // these objects will count the frequencies of individual values in the arrays
  const counter1 = {};
  const counter2 = {};
  
  // for each val in arr1, we add 1 to the counter if it's in the object (or we just initialize if it's not already present)
  for(const val of arr1){
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for(const val of arr2){
    counter2[val] = (counter2[val] || 0) + 1;
  }
  
  // looping through frequency counter
  for(const key in counter1){
    // is key^2 (e.g., 2^2) a key in counter2?
    if(!(key ** 2 in counter2)) return false;
    // Confirm that the frequency of the key's ocurrence in the first counter matches the frequency of the square of the key in the second object
    if(counter2[key ** 2] !== counter1[key]) return false;
  }
  return true;
};

