/**
 * 3668. Restore Finishing Order
 * easy
 * https://leetcode.com/problems/restore-finishing-order/description/
 *
 * Filters an order array to only include items that belong to known friends.
 *
 * @param {Array} order - The full list of items to filter.
 * @param {Array} friends - The list of known friends to match against.
 * @returns {Array} A new array containing only items from `order` that exist in `friends`.
 *
 * @example
 * recoverOrder(['Alice', 'Bob', 'Charlie'], ['Alice', 'Charlie']);
 * // Returns: ['Alice', 'Charlie']
 */

function recoverOrder(order, friends) {
  const set = new Set(friends);
  let result = [];
  for (const each of order) {
    if (set.has(each)) result.push(each);
  }
  return result;
}
