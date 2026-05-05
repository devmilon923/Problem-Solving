// const array = [1, 5, 3, 6, 4];
// let forwardIntialIndex = 0;
// let backwardInitalIndex = array.length - 1;
// while (forwardIntialIndex != backwardInitalIndex) {
//   let temp = array[forwardIntialIndex]; //1
//   array[forwardIntialIndex] = array[backwardInitalIndex]; // 4
//   array[backwardInitalIndex] = temp; // 1
//   forwardIntialIndex++;
//   backwardInitalIndex--;
// }
// console.log(array);

// const array = [1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1];
// let a = 0;
// let b = 0;
// while (a < array.length) {
//   if (array[a] === 0) {
//     let temp = array[a];
//     array[a] = array[b];
//     array[b] = temp;
//     b++;
//   }
//   a++;
// }
// console.log(array);

// const array = [5, -3, 12, -7, 0, 9, -1, 4, -10, 8];
// let pointer1 = 0;
// let pointer2 = 0;
// while (pointer1 < array.length) {
//   let digitStatus = array[pointer1] > 0 ? "p" : "n";
//   if (digitStatus === "p") {
//     let temp = array[pointer1];
//     array[pointer1] = array[pointer2];
//     array[pointer2] = temp;
//     pointer2++;
//   }
//   pointer1++;
// }
// console.log(array);

// const array = [1, 2, 3, 4, 6, 8, 10];
// function twoSum(target) {
//   let pointer1 = 0;
//   let pointer2 = array.length - 1;
//   let output = null;

//   while (pointer1 !== pointer2) {
//     if (array[pointer1] + array[pointer2] === target) {
//       output = [array[pointer1], array[pointer2]];
//       break;
//     } else {
//       pointer1++;
//       pointer2--;
//     }
//   }
//   return output;
// }
// console.log(twoSum(11));

// const array = [1, 2, 3, 4, 6, 8, 10];
// let copy = array[0];
// for (let i = 0; i < array.length - 1; i++) {
//   array[i] = array[i + 1];
// }
// array[array.length - 1] = copy;
// console.log(array);

// const array = [1, 2, 3, 4, 6, 8, 10];
// let copy = array[array.length - 1];
// for (let i = array.length - 1; i > 1; i--) {
//   array[i] = array[i - 1];
// }
// array[0] = copy;
// console.log(array);

// const array = [1, 2, 3, 4, 6, 8, 10];

// function kNotion(step, array) {
//   for (let i = 0; i < step; i++) {
//     let copy = array[0];
//     for (let j = 0; j < array.length - 1; j++) {
//       array[j] = array[j + 1];
//     }
//     array[array.length - 1] = copy;
//   }
//   return array;
// }
// console.log(kNotion(2, array));

// const array = [1, 2, 3, 4, 6, 8, 10];
// let temp = new Array(array.length);
// let k = 2;
// for (let i = 0; i < array.length; i++) {
//   temp[i] = array[(i + k) % array.length];
// }
// console.log(temp);

// const array = [1, 2, 3, 4, 6, 8, 10];
// let temp = new Array(array.length);
// let k = 2;
// for (let i = 0; i < array.length; i++) {
//   temp[(i + k) % array.length] = array[i];
// }
// console.log(temp);

const array = [1, 2, 3, 4, 5];
let k = 3 % array.length;
reverse(0, k - 1);
reverse(k, array.length - 1);
reverse(0, array.length - 1);
function reverse(value1, value2) {
  while (value1 < value2) {
    let temp = array[value1];
    array[value1] = array[value2];
    array[value2] = temp;
    value1++;
    value2--;
  }
}
console.log(array);
