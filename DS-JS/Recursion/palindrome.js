const isPalindrome = (str) => {
  //   if (str.length === 0) {
  //     return "no string";
  //   }

  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1)); // removes 1st and last item each time
};

console.log(isPalindrome("22")); //true
console.log(isPalindrome("14241")); //true

const otherPalindrome = (str) => {
  const n = str.length;
  let left = 0;
  let right = n - 1;
  if (n === 0) return false;
  while (left < right) {
    if (str(left) !== str(right)) return false;
    left++;
    right--;
  }
  return true;
};
