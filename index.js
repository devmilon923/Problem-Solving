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

// const array = [1, 2, 3, 4, 5];
// let k = 3 % array.length;
// reverse(0, k - 1);
// reverse(k, array.length - 1);
// reverse(0, array.length - 1);
// function reverse(value1, value2) {
//   while (value1 < value2) {
//     let temp = array[value1];
//     array[value1] = array[value2];
//     array[value2] = temp;
//     value1++;
//     value2--;
//   }
// }
// console.log(array);

// const array = [0, 0, 1, 2, 2, 3, 5, 6, 6];
// function removeDup(array) {
//   let pointer1 = 0;
//   let pointer2 = pointer1 + 1;
//   while (pointer1 < array.length) {
//     if (array[pointer1] < array[pointer1 + 1]) {
//       array[pointer2] = array[pointer1 + 1];
//       pointer2++;
//     }
//     pointer1++;
//   }
//   return array;
// }
// console.log(removeDup(array));

// const array1 = [2, 5, 7];
// const array2 = [4, 6, 9, 10];

// let pointer1 = 0;
// let pointer2 = 0;
// let pointer3 = 0;
// let margeArray = new Array(array1.length + array2.length);
// while (pointer1 < array1.length && pointer2 < array2.length) {
//   if (array1[pointer1] > array2[pointer2]) {
//     margeArray[pointer3] = array2[pointer2];
//     pointer2++;
//   } else {
//     margeArray[pointer3] = array1[pointer1];
//     pointer1++;
//   }
//   pointer3++;
// }
// while (pointer1 < array1.length) {
//   margeArray[pointer3] = array1[pointer1];
//   pointer1++;
//   pointer3++;
// }
// while (pointer2 < array2.length) {
//   margeArray[pointer3] = array2[pointer2];
//   pointer2++;
//   pointer3++;
// }
// console.log(margeArray);

// let array = [7, 1, 5, 3, 6, 4];
// let currentMax = 0;
// let currentMin = array[0];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if (element < currentMin) currentMin = element;
//   let tempMaxP = element - currentMin;
//   if (currentMax < tempMaxP) {
//     currentMax = Math.max(currentMax, tempMaxP);
//   }
// }
// console.log(currentMax);

// let array = [2, 0, 2, 1, 1, 0];
// let j = 0; // find 0
// let i = 0; // find 1
// let k = array.length - 1; // find 2
// while (i !== k) {
//   if (array[i] === 0) {
//     let temp = array[j];
//     array[j] = array[i];
//     array[i] = temp;
//     // i++;
//     j++;

//     array[j] = array[i];
//   } else if (array[i] === 2) {
//     let temp = array[k];
//     array[k] = array[i];
//     array[i] = temp;
//     k--;
//   }
//   i++;
// }
// console.log(array);

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxValue = -Infinity;
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   let tempSum = sum + element;
//   if (maxValue < tempSum) maxValue = tempSum;
//   sum = tempSum < 0 ? 0 : tempSum;
// }
// console.log(maxValue);

// const array = [2, 2, 1, 1, 1, 2, 2];
// let count = 0;
// let ans = array[0];
// for (let i = 1; i < array.length; i++) {
//   const element = array[i];
//   if (count <= 0) count = 0;
//   if (element === ans) {
//     count++;
//   } else {
//     count--;
//   }
// }
// console.log(ans);

// const stringValue = "my name is milon";

// let i = 0;
// let j = stringValue.length - 1;
// let stringArray = stringValue.split("");
// while (i < j) {
//   let temp = stringArray[i];
//   stringArray[i] = stringArray[j];
//   stringArray[j] = temp;
//   i++;
//   j--;
// }
// console.log(stringArray.join(""));

// function checkPallindrome(stringValue) {
//   let i = 0;
//   let j = stringValue.length - 1;
//   let status = false;
//   while (i !== j) {
//     if (stringValue[i] !== stringValue[j]) break;
//     status = true;
//     i++;
//     j--;
//   }
//   return status;
// }

// console.log(checkPallindrome("milon"));

// function wordFequency(stringValue) {
//   let result = new Map();
//   let tempArray = new Array(128).fill(0);
//   for (let i = 0; i < stringValue.length; i++) {
//     const getIndex = stringValue.charCodeAt(i);
//     tempArray[getIndex] = tempArray[getIndex] + 1;
//   }
//   for (let i = 0; i < stringValue.length; i++) {
//     const getIndex = stringValue.charCodeAt(i);
//     result.set(stringValue[i], tempArray[getIndex]);
//   }
//   return result;
// }
// console.log(wordFequency("milon"));

// function removeDuplicates(nums) {
//   let left = 1;

//   for (let right = 1; right < nums.length; right++) {
//     const element = nums[right];
//     if (element !== nums[right - 1]) {
//       nums[left] = element;
//       left++;
//     }
//   }
//   return left;
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// i;
// // [0,0,1,1,1,2,2,3,3,4]
// j;

//same =true
// not same = n+1 update

// let array = [3, 7, 1, 9, 10, 5];
// letTempLength = array.length;
// for (let index = 0; index < letTempLength; letTempLength--) {
//   for (let i = 0; i < letTempLength; i++) {
//     const element = array[i];
//     if (element > array[i + 1]) {
//       let temp = element;
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//     }
//   }
// }
// console.log(array);

let array = [3, 7, 1, 9, 10, 5];
let minIndex = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[minIndex] > array[j]) {
      minIndex = j;
    }
  }
  if (i !== minIndex) {
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
}
console.log(array);
