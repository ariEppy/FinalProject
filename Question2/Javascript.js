let array = [1, 2, 3, 4, 5, 1];
let number = 6;

function check(array) {
  for (let p = 0; p < array.length; p++) {
    if (typeof array[p] !== "number") throw new Error("array has non numbers");
  }
}

function sequence(array, number) {
  // check that all elements in the array are numbers
  check(array);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (sum + array[j] === number) count++;
      if (sum + array[j] > number) break;
      sum += array[j];
    }
  }
  return count;
}

console.log(sequence(array, number));
