// binary search implementation
// arr MUST be sorted

function binarySearch(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    // find middle value
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleValue = arr[middleIndex];

    if (middleValue < val) {
      // middleValue is too small, look at the right half
      leftIndex = middleIndex + 1;
    } else if (middleValue > val) {
      // middleValue is too large, look at the left half
      rightIndex = middleIndex - 1;
    } else {
      // we found our value!
      return middleIndex;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}
