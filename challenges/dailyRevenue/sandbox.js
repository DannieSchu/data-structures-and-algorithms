module.exports = timestamps => {
  const datedTimestamps = timestamps.map(obj => ({
    date: new Date(obj.timestamp).toDateString(),
    price: obj.price
  }));

  return datedTimestamps.reduce((acc, curr) => {
    // does the current date exist in the accumulator? if so, add the price to the accumulator (i.e., revenue for this date); otherwise, return this price
    acc[curr.date] ? acc + acc[curr.price] : acc[curr.price];
    return acc;
  }, {});
};

//   return datedTimestamps.reduce((acc, curr) => {
//     // find out if there is any revenue for a certain date (does accumulator have any revenue for a given date?)
//     const revenueForDate = acc[curr.date];
//     // if there is revenue, add value of price property to it
//     if(revenueForDate) {
//       revenueForDate + acc[curr.price];
//     } else {
//       // otherwise, set accumulator equal to price
//       acc = acc[curr.price];
//     }
//     return acc;
//   }, {});
// };
