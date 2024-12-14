// https://leetcode.com/problems/lru-cache/description/
// O(1) solution

var LRUCache = function (capacity) {
  this.capacity = capacity; // Store the maximum capacity of the cache
  this.cache = new Map(); // Use a Map to store key-value pairs
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1; // If the key does not exist, return -1
  }

  // If the key exists, move it to the end (mark as recently used)
  const value = this.cache.get(key);
  this.cache.delete(key); // Remove it from its current position
  this.cache.set(key, value); // Reinsert it at the end

  return value; // Return the value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) === -1) {
    if (this.cache.size >= this.capacity) {
      // If the cache exceeds capacity, remove the least recently used item
      for (let [key, value] of this.cache) {
        this.cache.delete(key);
      }
    }
  }

  this.cache.set(key, value);

  //   if (this.cache.has(key)) {
  // Use the 'get' method to mark the key as recently used
  //     this.get(key);
  //   } else if (this.cache.size >= this.capacity) {
  // Remove the least recently used item
  //     this.cache.delete(lruKey); // Remove it from the cache
  //     for (let [key, value] of this.cache) {
  //       this.cache.delete(key);
  //     }
  //   }
};
