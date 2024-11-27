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
