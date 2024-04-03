// ?? Given a sorted array of 'n' elements and a target element 't'
// ?? Find the index of 't' in the array
// ?? Return -1 if the target element is not found

// !! Binary Search only works on a sorted array

// PSEUDOCODE
// If the array is empty, return -1 as the element cannot be found
// If the array has elements, find the middle element in the array If target is equal to the middle element, return the middle element index
// If the target is less than the middle element, binary search left half of the array
// If target is greater then middle element, binary search right half of the array

export default function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// !! BigO = O(logn)
