/**
 * @param {Array<{ kg: number, price: number }>} carrotTypes - List of carrot types with weight and price.
 * @param {number} capacity - The total weight capacity of the bag.
 * @returns {number} - The maximum total price that can be obtained.
 */

function getMaxValue(carrotTypes, capacity) {
  let maxValues = new Array(capacity + 1).fill(0);

  for (let weight = 0; weight <= capacity; weight++) {
    for (let { kg, price } of carrotTypes) {
      if (weight >= kg)
        maxValues[weight] = Math.max(
          maxValues[weight],
          maxValues[weight - kg] + price,
        );
    }
  }

  return maxValues[capacity];
}

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;
console.log(getMaxValue(carrotTypes, capacity));
