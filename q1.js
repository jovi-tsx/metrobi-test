/**
 * @param {Array<number>} arr - Array with values to find duplicated values.
 */

function findDuplicates(arr) {
  const registered = new Set();
  return arr.filter(item => registered.has(item) || !registered.add(item));
}

const array = [1, 2, 3, 1, 4, 5, 3, 7, 12, 12];
console.log(findDuplicates(array));