const array = [1, 1, 2, 2, 3];
// Problem:
// Remove duplicates in-place and return new length.

function way1(array) {
  return new Set(array);
}
console.log(way1(array));
