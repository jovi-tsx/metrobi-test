/**
 * @param {number} floors - Quantity of floors in building.
 */

function minimumDropsNumber(floors) {
  let drops = 0;
  while (floors > 0) {
    drops++;
    floors -= drops;
  }
  return drops;
}

const floors = 100;
const eggs = 2;
const result = minimumDropsNumber(floors, eggs);
console.log(`Minimum number of drops required: ${result}`);