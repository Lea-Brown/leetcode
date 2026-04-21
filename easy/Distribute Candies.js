/**
 * 575. Distribute Candies
 * easy
 * https://leetcode.com/problems/distribute-candies/description/
 *
 * Distributes candies equally between two people, maximising variety.
 *
 * @param {number[]} candyType - Array of candy type identifiers, where each
 *   element represents a candy and its value represents its type.
 * @returns {number} The maximum number of unique candy types one person can
 *   receive when splitting the candies equally.
 *
 * @example
 * distributeCandies([1, 1, 2, 2, 3, 3]); // 3
 * distributeCandies([1, 1, 2, 3]);        // 2
 */

const distributeCandies = (candyType) =>
  Math.min(new Set(candyType).size, candyType.length / 2);
