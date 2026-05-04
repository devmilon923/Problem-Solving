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

const array = [1, 2, 3, 4, 6, 8, 10];

function twoSum(target) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;
  let output = null;

  while (pointer1 !== pointer2) {
    if (array[pointer1] + array[pointer2] === target) {
      output = [array[pointer1], array[pointer2]];
      break;
    } else {
      pointer1++;
      pointer2--;
    }
  }
  return output;
}
console.log(twoSum(11));
