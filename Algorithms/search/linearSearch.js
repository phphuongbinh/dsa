// ?? Problem: Give an array of 'n' elements and a target element 't'
// ?? - Find the index of 't' in the array.
// ?? - Return -1 if the target element is not found

/** LINEAR SEARCH PSEUDOCODE
 *  - Start at the first element in the array and move towards the last
 *  - At each element though, check if the element is equal to the target element
 *  - If element found -> return the index
 *  - If not -> return -1
 */

export default function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// !! Big O = O(n)
