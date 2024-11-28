// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

const validAnagram = (str1, str2) => {
  let obj1 = {};
  let obj2 = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(validAnagram("anagram", "nagarm")); //false
console.log(validAnagram("listen", "silent")); // true
// rat / tar

// {
//     r: 1,
//     a: 1,
//     t:1
// }

// {
//     t: 1,
//     a: 1,
//     r:1
// }
