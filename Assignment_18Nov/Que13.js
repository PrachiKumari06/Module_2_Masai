const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

function countingcateg(arr) {
  const counting = arr.reduce(function (acc, item) {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;   
    }
    return acc;
  }, {});

  return counting;
}

console.log(countingcateg(categories));
