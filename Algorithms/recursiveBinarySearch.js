import binarySearch from "./binarySearch.js";
// ?? Problem: Give an array of 'n' elements and a target element 't'
// ?? - Find the index of 't' in the array.
// ?? - Return -1 if the target element is not found

// TIPS FOR RECURSIVE SOLUTIONS
// Figure out how to break down the problem into smaller versions of the same problem
// Indentify the base case for recussion

export default function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// !! BigO = O(log N)
