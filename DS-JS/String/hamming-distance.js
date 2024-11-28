// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

const hammingDistance = (str1, str2) => {
  console.log("--dist");
  let distance = 0;
  str1 = str1.toString(2);
  // console.log(str1);
  str2 = str2.toString(2);
  //   console.log(str2);
  if (str1.length < str2.length) {
    while (str1.length !== str2.length) {
      str1 = "0" + str1;
    }
  } else {
    while (str1.length !== str2.length) {
      str2 = "0" + str2;
    }
  }

  console.log(str1, str2);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(hammingDistance(44, 9)); //3
console.log(hammingDistance("would", "could")); //1
