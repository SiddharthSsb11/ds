const duplicateNumber = (nums) => {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }

  return -1;
};

console.log(duplicateNumber([1, 3, 4, 2, 2]));
