// ?? Given an array of integers, sort the array

// BUBBLE SORT IDEA
// Compare adjacent elements in the array and swap the postions if they are not in the intened order
// Repeat the instruction as you step through each element in the array
// Once you step through whole array with no swaps, the array is sorted

export function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
