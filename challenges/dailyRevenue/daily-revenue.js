module.exports = timestamps => {
  return timestamps.reduce((acc, curr) => {
    // create date string from timestamp
    const date = new Date(curr.timestamp).toDateString();
    const revenue = curr.price;
    // if date already exists in acc, add current revenue to it
    if(acc[date]) {
      acc[date] += revenue;
    } else {
      // otherwise, set initial revenue for that date
      acc[date] = revenue;
    }
    return acc;
  }, {});
};
