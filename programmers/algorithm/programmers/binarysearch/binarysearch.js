function binarysearch(array, searchnumber) {
  let left = 0;
  let right = array.length - 1;
  let i = 0;
  if (searchnumber === array[0]) return [0, 0];
  if (searchnumber === array[array.length - 1]) return [array.length - 1, 0];
  while (right - left !== 1) {
    i++;
    let mid = Math.ceil((left + right) / 2);
    if (searchnumber > array[mid]) left = mid;
    else if (searchnumber === array[mid]) return [mid, i];
    else right = mid;
  }

  return [-1, -1];
}

console.log(binarysearch([7, 9, 12, 25, 29, 39, 48, 71, 79, 83, 86], 100));
