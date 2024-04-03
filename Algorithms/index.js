// import { bubbleSort } from "./sort/bubbleSort.js";
// import linearSearch from "./search/linearSearch.js";
import { insertionSort } from "./sort/insertionSort.js";

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], -1));

// import binarySearch from "./search/binarySearch.js";

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// import recursiveBinarySearch from "./search/recursiveBinarySearch";

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));

// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);
