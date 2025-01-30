/**
 * @param {Array<any>} arr - Array with any value that will show values each i * 2 seconds.
 */

async function writeWithDelay(arr) {
  for (const index in arr) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(arr[index]);
        resolve();
      }, 1000 * Math.pow(2, index));
    });
  }
}

// Example usage:
const array = ['This took 1s', 'This took 2s', 'This took 4s', 'This took 8s', 'This took 16s'];
writeWithDelay(array);
