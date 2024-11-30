// https://leetcode.com/problems/group-anagrams/description/
// Given an array of strings strs, group the  anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"] // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Input: strs = [""] Output: [[""]]
// Input: strs = ["a"] Output: [["a"]]

const groupAnagrams = (anagrams) => {
  const anagramMap = new Map();

  for (let word of anagrams) {
    const sortedWord = word.split("").sort().join("");
    // console.log(sortedWord);

    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }
  }

  return Array.from(anagramMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); //[['eat', 'tea', 'ate'] ,['tan', 'nat'], ['bat']]
