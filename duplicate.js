const array = [1, 1, 2, 2, 3];
// Problem:
// Remove duplicates in-place and return new length.

function way1(array) {
  return new Set(array);
}
function way2(array) {
  let newArry = new Set();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!newArry.has(element)) {
      newArry.add(element);
    }
  }
  return newArry;
}
console.log(way2(array));
